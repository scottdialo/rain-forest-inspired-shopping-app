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
            <div key={product.id} className="col-md-4 mt-2">
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
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-img-actions">
                      <img
                        src={product.image}
                        className="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        <p className="text-default mb-2" data-abc="true">
                          {product.title}
                        </p>
                      </h6>

                      <p className="text-muted" data-abc="true">
                        {product.category}{" "}
                      </p>
                    </div>

                    <h3 className="mb-0 font-weight-semibold">
                      ${product.price}
                    </h3>

                    <div>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
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
