import { NextRequest, NextResponse } from 'next/server'

interface AmadeusTokenResponse {
  access_token: string
  expires_in: number
}

interface AmadeusFlightSearchParams {
  originLocationCode: string
  destinationLocationCode: string
  departureDate: string
  adults: string
  returnDate?: string
}

let cachedToken: { token: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string> {
  const now = Date.now()
  if (cachedToken && cachedToken.expiresAt > now) {
    return cachedToken.token
  }

  const clientId = process.env.AMADEUS_API_KEY
  const clientSecret = process.env.AMADEUS_API_SECRET

  if (!clientId || !clientSecret) {
    throw new Error('Missing Amadeus API credentials')
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  try {
    const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })

    if (!response.ok) {
      throw new Error(`Token request failed: ${response.statusText}`)
    }

    const data: AmadeusTokenResponse = await response.json()
    cachedToken = {
      token: data.access_token,
      expiresAt: now + (data.expires_in - 60) * 1000,
    }

    return data.access_token
  } catch (error) {
    console.error('[v0] Error getting Amadeus access token:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: AmadeusFlightSearchParams = await request.json()

    const accessToken = await getAccessToken()

    const params = new URLSearchParams({
      originLocationCode: body.originLocationCode,
      destinationLocationCode: body.destinationLocationCode,
      departureDate: body.departureDate,
      adults: body.adults || '1',
      max: '50',
    })

    if (body.returnDate) {
      params.append('returnDate', body.returnDate)
    }

    const searchUrl = `https://test.api.amadeus.com/v2/shopping/flight-offers?${params.toString()}`

    const response = await fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      console.error('[v0] Amadeus API error:', response.status, await response.text())
      return NextResponse.json(
        { error: 'Failed to fetch flights from Amadeus', details: response.statusText },
        { status: response.status }
      )
    }

    const flightData = await response.json()
    return NextResponse.json(flightData)
  } catch (error) {
    console.error('[v0] Flight search error:', error)
    return NextResponse.json(
      {
        error: 'Failed to search flights',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
