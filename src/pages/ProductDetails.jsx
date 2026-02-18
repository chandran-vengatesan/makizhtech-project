import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">

      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-contain"
      />

      <Link to={`/products/${product.id}`}>
        <h3 className="mt-4 font-semibold hover:text-blue-600">
          {product.name}
        </h3>
      </Link>

      <p className="text-gray-500 text-sm mt-1">
        {product.description}
      </p>

      <p className="text-xl font-bold mt-2">
        ₹{product.price}
      </p>

      <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
