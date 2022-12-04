import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = (isAuth) => {
    const auth = getAuth();
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
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <h4 className="login-title">Login</h4>
      <div>
        <label>Email</label>
        <input autoFocus
          type="text"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={login} className="login-btn">
        Login
      </button>
    </div>
  );
}
