import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const rse = await fetch("https://dummyjson.com/products?limit=100");
    const data = await rse.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <h1 style={{textAlign: "center"}}>Building pagenation UI</h1>
      <Card products={products} />
    </>
  );
};

export default App;
