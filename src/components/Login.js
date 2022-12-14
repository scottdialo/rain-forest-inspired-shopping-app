import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
export default function Login() {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        console.log("You are logged in....");
        navigate("/orders", {
          state: "Hello World!",
        });
      })
      .catch((error) => {
        console.log(error.code);

        console.log(error.message);
      });
  };

  return (
    <div>
      <div
        className="jss1 MuiAvatar-root MuiAvatar-circle jss2 "
        style={{ fill: "white" }}
      >
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
        </svg>
      </div>

      <h4 className="login-title">Login</h4>
      <form>
        <label>Email</label>
        <input
          autoFocus
          type="text"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          autoComplete="true"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </form>
      <button onClick={login} className="login-btn">
        Login
      </button>
      <Link to="/registration">
        <p className="register-text">Don't have an account? Sign Up</p>
      </Link>
    </div>
  );
}
