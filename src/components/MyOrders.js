import { auth } from "../firebase-config";
import { useLocation } from "react-router-dom";
import React from "react";

function MyOrders() {
  const { state } = useLocation();

  return (
    <div>
      {/* <p style={{textAlign:"center"}}> You are logged in as: {auth.currentUser.email}</p> */}

      <h4 style={{ textAlign: "center" }}>My Orders</h4>
    </div>
  );
}

export default MyOrders;
