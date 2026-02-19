
import ProductCard from "../components/ProductCard";
import { products } from "../data/products"; // Path-a check pannikonga (../ use pannanum)

function AllProducts() {
  return (
    <div>
      
      <div className="max-w-7xl mx-auto p-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Our Sensor Products</h1>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default AllProducts;
