import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerCity, setRegisterCity] = useState("");
  const [registerState, setRegisterState] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  // const [loggedInUser, setloggedInUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
    // setloggedInUser(currentUser);
  // });

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        registerCity,
        registerPhone,
        registerState
      );
      console.log(user);
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h4 className="register-title">Registration </h4>
      <form className="registration-form">
        <div>
          <label>Email</label>
          <input autoComplete="true"
            type="text"
            autoFocus
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password" autoComplete="true"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label>City</label>
          <input
            type="text"
            onChange={(e) => {
              setRegisterCity(e.target.value);
            }}
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            onChange={(e) => {
              setRegisterState(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            onChange={(e) => {
              setRegisterPhone(e.target.value);
            }}
          />
        </div>
        <button onClick={register} className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
}
