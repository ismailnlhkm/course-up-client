import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#eea904" }}>
        <div class="container">
          <Link to="/" class="navbar-brand p-2">
            <img src={require("../assets/Logo.png")} alt="COURSEUP Logo" style={{ maxHeight: "20px" }} />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  <strong style={{ color: "#402a2e" }}>Home</strong>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/course/get" class="nav-link">
                  <strong style={{ color: "#402a2e" }}>Get Course</strong>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/course/mycourse" class="nav-link">
                  <strong style={{ color: "#402a2e" }}>My Course</strong>
                </Link>
              </li>
            </ul>
            <a onClick={(e) => logout(e)} class="nav-link d-flex" href="">
              <strong style={{ color: "#402a2e" }}>Sign Out</strong>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
