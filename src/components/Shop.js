import { useState, useEffect } from "react";
// import { auth } from "../firebase-config";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  // const [loggedInUser, setloggedInUser] = useState({});

  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    Axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} class="col-md-4 mt-2">
              <Link
                to={`${product.title}`}
                state={{
                  rate: product.rate,
                  title: product.title,
                  image: product.image,
                  description: product.description,
                  price: product.price,
                }}
              >
                <div class="card h-100">
                  <div class="card-body">
                    <div class="card-img-actions">
                      <img
                        src={product.image}
                        class="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2">
                        <Link to="#" class="text-default mb-2" data-abc="true">
                          {product.title}
                        </Link>
                      </h6>

                      <Link to="#" class="text-muted" data-abc="true">
                        {product.category}{" "}
                      </Link>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">${product.price}</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
