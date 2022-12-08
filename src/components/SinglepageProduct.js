import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function SinglepageProduct() {
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const { state } = location;

  //add to cart function
  const addToCart = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
    document.getElementById("cart").innerHTML = quantity;
  };

  return (
    <div>
      <div className="container-fluid single-prod-container">
        <div className="row">
          <div className="col-12 mx-auto col-md-6 mt-5 pt-4">
            <div className="d-flex sale ">
              <div className="btn">SALE</div>
            </div>
            <img
              className="mx-auto single-img"
              src={state.image}
              width="auto"
              height="auto"
              alt="product-pic"
            />
          </div>

          <div className="col-12 col-md-6 mx-auto  product-desc">
            <h5 className="card-title">{state.title}</h5>
            <p>
              {" "}
              <strong>${state.price}</strong>
            </p>
            <p className="card-text">${state.description}</p>

            <button
              type="button"
              className="btn bg-cart addToCart"
              onClick={addToCart}
            >
              <i className="fa fa-cart-plus mr-2"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglepageProduct;
