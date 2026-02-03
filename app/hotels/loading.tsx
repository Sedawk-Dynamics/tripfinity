export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar Skeleton */}
        <div className="mb-12 animate-pulse">
          <div className="h-16 bg-slate-700/50 rounded-lg mb-4"></div>
        </div>

        {/* Hotel Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-slate-800/30 rounded-lg overflow-hidden animate-pulse">
              <div className="h-48 bg-slate-700/50"></div>
              <div className="p-4">
                <div className="h-4 bg-slate-700/50 rounded mb-2"></div>
                <div className="h-3 bg-slate-700/50 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
