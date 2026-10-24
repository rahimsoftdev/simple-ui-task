
import { useState } from "react";

const ProductCard = ({ product, myList, setMyList }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) {
      setMyList((prevList) =>
        prevList.filter((item) => item.id !== product.id)
      );
      setIsAdded(false);
    } else {
      setMyList((prevList) => [...prevList, product]);
      setIsAdded(true);
    }
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        )}

        {product.isFeatured && (
          <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {product.category}
          </span>

          <span className="text-sm font-medium text-amber-500">
            ★ {product.rating}
          </span>
        </div>

        <h2 className="truncate text-lg font-bold text-gray-900">
          {product.name}
        </h2>

        <p className="line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            ৳{product.price.toLocaleString("en-BD")}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ৳{product.originalPrice.toLocaleString("en-BD")}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{product.brand}</span>

          <span
            className={
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }
          >
            {product.stock > 0
              ? `${product.stock} in stock`
              : "Out of stock"}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full rounded-xl px-4 py-3 font-semibold text-white transition duration-300 disabled:cursor-not-allowed disabled:bg-gray-300 ${
            isAdded
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isAdded ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
