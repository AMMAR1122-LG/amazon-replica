type Product = {
  id: number
  title: string
  price: number
  rating: number
  reviews: number
  image: string
  alt: string
}

type Props = {
  product: Product
  onAdd: () => void
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <article
      tabIndex={0}
      className="bg-white border rounded-lg p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <img
        src={product.image}
        alt={product.alt}
        className="w-full h-48 object-cover mb-3 rounded"
      />
      <h3 className="text-sm font-medium mb-1" style={{ height: '3rem', overflow: 'hidden' }}>
        {product.title}
      </h3>
      <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <Stars rating={product.rating} />
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        <button
          onClick={onAdd}
          className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}

type StarsProps = {
  rating?: number
}

function Stars({ rating = 0 }: StarsProps) {
  const full = Math.floor(rating)
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < full ? 'text-yellow-400' : 'text-gray-300'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 19.771 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
        </svg>
      ))}
    </div>
  )
}
