import React from "react";

const Card = ({ item, addToBasket, clearFromBasket, amount }) => {
  return (
    <div
      style={{ width: "200px" }}
      className="d-flex flex-column align-items-center  border rounded p-3 m-3 top-card"
    >
      <img height={100} src={item.imagePath} alt="icecream-image" />
      <span>{item.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button
          onClick={() => clearFromBasket(item.name)}
          className="btn btn-sm btn-outline-danger"
        >
          Reset
        </button>
        <span data-testid="amount" className="fs-3">
          {amount}
        </span>
        <button
          onClick={() => addToBasket(item)}
          className="btn btn-sm btn-outline-success"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
