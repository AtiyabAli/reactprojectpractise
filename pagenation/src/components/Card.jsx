import React, { useState } from "react";

const Card = ({ products }) => {
  const [page, setPage] = useState(1);
  const selectPageHandler = (i) => {
    setPage(i + 1);
  };
  return (
    products.length > 0 && (
      <>
        <div className="div">
          {products.slice(page * 10 - 10, page * 10).map((elm) => {
            return (
              <div className="container">
                <p key={elm.id}>{elm.title}</p>
                <img style={{ width: "120px" }} src={elm.images} alt="" />
              </div>
            );
          })}
        </div>

        <div className="btn">
          <button onClick={() => page > 1 && setPage(page - 1)}>◀️</button>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <button
                className={page === i + 1 ? "hover" : "normal"}
                onClick={() => selectPageHandler(i)}
                key={i}
              >
                {i + 1}
              </button>
            );
          })}
          <button onClick={() => page < 10 && setPage(page + 1)}>▶️</button>
        </div>
      </>
    )
  );
};

export default Card;
