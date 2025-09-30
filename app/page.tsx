'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

// Define a Product type
type Product = {
  id: number
  title: string
  price: number
  rating: number
  reviews: number
  image: string
  alt: string
}

// Dummy products
const products: Product[] = [
  { id: 1, title: "Men's Cotton Slim Fit Shirt", price: 29.99, rating: 4.5, reviews: 112, image: 'https://picsum.photos/seed/1/600/600', alt: "Blue cotton shirt, front view" },
  { id: 2, title: "Wireless Noise-Cancel Headphones", price: 89.99, rating: 4.7, reviews: 540, image: 'https://picsum.photos/seed/2/600/600', alt: "Over-ear wireless headphones" },
  { id: 3, title: "Stainless Steel Water Bottle 1L", price: 19.50, rating: 4.2, reviews: 76, image: 'https://picsum.photos/seed/3/600/600', alt: "Silver stainless steel bottle" },
  { id: 4, title: "Lightweight Running Shoes", price: 59.99, rating: 4.6, reviews: 243, image: 'https://picsum.photos/seed/4/600/600', alt: "Black running shoes side view" },
  { id: 5, title: "Bluetooth Portable Speaker", price: 39.99, rating: 4.3, reviews: 198, image: 'https://picsum.photos/seed/5/600/600', alt: "Compact Bluetooth speaker" },
  { id: 6, title: "Smart LED Desk Lamp", price: 25.00, rating: 4.1, reviews: 64, image: 'https://picsum.photos/seed/6/600/600', alt: "Adjustable LED desk lamp" },
]

export default function Home() {
  // Cart is an array of Product
  const [cart, setCart] = useState<Product[]>([])

  function addToCart(product: Product) {
    setCart(prev => [...prev, product])
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Product Listing — Replica</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
          ))}
        </div>
      </main>
    </>
  )
}

