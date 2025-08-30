import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Menu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
          Menu
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Explore our selection of fruit baskets and premium fruits.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
