import React, {useState} from "react";
import { useLocation } from "react-router-dom";

function SinglepageProduct() {
    const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const { state } = location;

    console.log(state);
    
 //add to cart function
 const addToCart = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
    document.getElementById("cart").innerHTML = quantity;
  };

  return (
    <div>
      <div class="container-fluid">
        <div class="card mx-auto col-md-3 col-10 mt-5 pt-4">
          <div class="d-flex sale ">
            <div class="btn">SALE</div>
          </div>
          <img
            class="mx-auto img-thumbnail"
            src={state.image}
            width="auto"
            height="auto" alt="product-pic"
          />
          <div class="card-body text-center mx-auto">
            <h5 class="card-title">{state.title}</h5>
            <p class="card-text">${state.price}</p>
            <p class="card-text">${state.description}</p>
                  </div>
                  <button
                        type="button"
                        class="btn bg-cart addToCart"
                        onClick={addToCart}
                      >
                        <i class="fa fa-cart-plus mr-2"></i> Add to cart
                      </button>
        </div>
      </div>
    </div>
  );
}

export default SinglepageProduct;
