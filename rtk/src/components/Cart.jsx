import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id))
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cartProducts.map((elm) => {
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
                <Button variant="danger" onClick={() => removeFromCart(elm.id)}>
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
