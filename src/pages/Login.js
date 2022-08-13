import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Login() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    name: "",
    password: "",
  });

  const inputDatahandler = (e) => {
    e.preventDefault();
    const newLogin = {
      ...formLogin,
    };
    newLogin[e.target.name] = e.target.value;
    setFormLogin(newLogin);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data: response } = await axios({
        method: "POST",
        url: "https://course-up.herokuapp.com/login",
        data: {
          name: formLogin.name,
          password: formLogin.password,
        },
      });
      if (response) {
        localStorage.setItem("access_token", response.access_token);
        navigate("/");
      }
    } catch (err) {
      swal(err.response.data.message);
    }
  };
  return (
    <div>
      <div className="container-fluid min-vh-100" style={{ backgroundColor: "#eea904" }}>
        <div className="row p-5">
          <div className="col p-5">
            <div className="mb-5" style={{ marginTop: "100px" }}>
              <img src={require("../assets/Logo.png")} alt="COURSEUP Logo" style={{ maxHeight: "70px" }} />
            </div>

            <div className="mt-5">
              <form className="mx-auto text-start" style={{ maxWidth: "490px" }} method="POST">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    <strong style={{ color: "#402a2e" }}> Name</strong>
                  </label>
                  <input type="text" value={formLogin.name} onChange={inputDatahandler} name="name" required className="form-control" id="name" />
                </div>
                <div className="mb-4">
                  <label for="password" className="form-label">
                    <strong style={{ color: "#402a2e" }}> Password</strong>
                  </label>
                  <input type="password" value={formLogin.password} onChange={inputDatahandler} name="password" required className="form-control" id="password" />
                </div>

                <button
                  onClick={(e) => {
                    loginHandler(e);
                  }}
                  type="submit"
                  className="btn btn-dark text-light mb-3"
                  style={{ minWidth: "490px", backgroundColor: "#402a2e" }}
                >
                  Sign In
                </button>

                <div className="text-center">
                  <p style={{ color: "#402a2e" }}>
                    Don't have an account?{" "}
                    <Link to="/register" style={{ color: "#402a2e" }}>
                      {" "}
                      <strong>Sign Up</strong>
                    </Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
