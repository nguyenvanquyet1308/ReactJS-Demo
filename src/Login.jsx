import "./Login.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
function Login() {
  const [gmail, setGmail] = useState();
  const [password, setPassword] = useState();
  const Validate = () => {
    if (gmail === "" || gmail === null) {
      toast.error("Vui lòng nhập gmail và password");
      return;
    }
    if (password === "" || password === null) {
      toast.error("Vui lòng nhập gmail và password");
      return;
    }
  };
  return (
    <div className="Login-Container col-4 ">
      <div className="title">Login</div>
      <div className="titleU">Vui lòng điền thông tin !</div>
      <input
        type="text"
        placeholder="Username or gmail"
        value={gmail}
        onChange={(event) => setGmail(event.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div className="ForgotPassword">Quên mật khẩu ?</div>
      <button
        className={gmail && password ? "active" : ""}
        // disabled={gmail && password ? false : true}
        onClick={() => Validate()}
      >
        Login
      </button>
      <label className="Logout" htmlFor="">
        Logout
      </label>
    </div>
  );
}
export default Login;
