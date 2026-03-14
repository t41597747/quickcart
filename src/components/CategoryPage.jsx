import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";

function CategoryPage() {

  const { category } = useParams();

  const filtered = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h2>{category}</h2>

      {filtered.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CategoryPage;