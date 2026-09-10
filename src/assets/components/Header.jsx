import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../fotos/logo.png";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname;

  return (
    <header className="sarau-header">

      <div className="main-header">

        <div className="logo">
          <img src={logo} alt="logo-AfroSarau" />
        </div>

        <p className="citacao-topo">
          "Lutamos ontem. Resistimos
          <br />
          hoje. Lutaremos amanhã"
        </p>

      </div>

      <div className="navbar">
        <nav>

          <div
            className={`nav-item ${activeTab === "/" ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </div>

          <div
            className={`nav-item ${
              activeTab === "/galeria" ? "active" : ""
            }`}
            onClick={() => navigate("/galeria")}
          >
            Galeria
          </div>

          <div
            className={`nav-item ${
              activeTab === "/cultura" ? "active" : ""
            }`}
            onClick={() => navigate("/cultura")}
          >
            Cultura
          </div>

          <div
            className={`nav-item ${
              activeTab === "/conta" ? "active" : ""
            }`}
            onClick={() => navigate("/conta")}
          >
            Conta
          </div>

        </nav>
      </div>

    </header>
  );
}