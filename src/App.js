import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import "./styles.css";

import { PAGE_SIZE } from "./constants.js";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  const noOfProducts = products.length;

  const noOfPages = Math.ceil(noOfProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;

  const end = start + PAGE_SIZE;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="page">Pagination</h1>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noOfPages={noOfPages}
      />
      <div className="products-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}
