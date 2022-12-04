import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import About from "./About";
import Careers from "./Careers";
import Login from "./Login";
import Homepage from "./Homepage";
import MyOrders from "./MyOrders";
import Registration from "./Registration";
import Shop from "./Shop";
import SinglepageProduct from "./SinglepageProduct";

//logout function
const logout = async () => {
  await signOut(auth);
};

function Navigation() {
  return (
    <div className="container">
      <div className="top-navigation">
        <div className="top-navigation-left">
          <Link to="/">
            <img className="logo" src="./smokey-logo.png" alt="shop-app-logo" />
          </Link>
          <div className="top-navigation-links">
            <Link to="/shop">Shop</Link>
            <Link to="/orders">My Orders</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="top-navigation-right">
          {/* <Link to="/login" onClick={logout}>
            Logout
          </Link> */}

          <Link to="/login">Login</Link>

          <Link to="/registration" className="signup-btn">
            Sign up
          </Link>
          <div id="cart" className="cart"></div>
          {/* <div>
            <FontAwesomeIcon icon="fa-light fa-cart-shopping" />
            hey
          </div> */}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/:id" element={<SinglepageProduct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Shop />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default Navigation;
