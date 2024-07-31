import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const dispatch = useDispatch()
  const addTocart = (elm) => {
    dispatch(add(elm))
  }

  const cards = products.map((elm) => {
    return (
      <div className=" col-md-3">
        <Card className="h-100" key={elm.id} style={{ width: "18rem" }}>
          <div className="text-center">
            <Card.Img
              style={{ width: "150px", height: "130px" }}
              variant="top"
              src={elm.image}
            />
          </div>
          <Card.Body>
            <Card.Title>{elm.title}</Card.Title>
            <Card.Text>{elm.description}</Card.Text>
            <Card.Text>INR {elm.price}</Card.Text>
            <Button variant="primary" onClick={() => addTocart(elm)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1>Product Dashbord</h1>
   

      <div className="row">{cards}</div>
      
    </>
  );
};

export default Product;
