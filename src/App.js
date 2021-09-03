import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleLoginStatus } from "./actions/index";

function App() {
  const loggedIn = useSelector((state) => state.isLogged);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{`Counter Value is : ${count}`}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {loggedIn && <h1> We are logged In ...!!</h1>}
      <button onClick={() => dispatch(toggleLoginStatus(loggedIn))}>
        {" "}
        {loggedIn ? `Logout ` : `Login`}{" "}
      </button>
    </div>
  );
}

export default App;
