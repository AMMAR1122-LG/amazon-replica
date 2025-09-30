'use client'
export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="bg-yellow-500 text-white font-bold px-2 py-1 rounded">RS</div>
          <span className="font-semibold text-lg">ReplicaStore</span>
        </a>

        <div className="flex items-center gap-4">
          <input aria-label="Search products" placeholder="Search products..." className="border rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <a href="#" aria-label="Shopping cart" className="relative inline-flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4"></path></svg>
            {cartCount > 0 && <span className="ml-1 bg-red-600 text-white rounded-full px-2 text-xs">{cartCount}</span>}
          </a>
        </div>
      </div>
    </header>
  )
}
