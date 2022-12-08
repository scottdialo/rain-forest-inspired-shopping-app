import { Link } from "react-router-dom";
import nature  from "./assets/images/nature2.jpg"


export default function Homepage() {
  return (
    <div>
      <h4 className="info-bar">
        {" "}
        We invest 10% of every purchase you make to plant trees and protect
        wildlife...
      </h4>
      <div className="container">
        <div className="landingpage-body">
          <div className="landingpage-body-left">
            <h1>
              Buy <br />
              Ethically sourced products
            </h1>
            <p>"The Earth is what we all have in common." —Wendell Berry</p>
            <Link to="/shop">
              <button>Shop Now</button>
            </Link>
          </div>

          <div className="landingpage-body-right">
            <img
              className="landing-page-img-right"
              src={nature}
              alt="waterfall"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
