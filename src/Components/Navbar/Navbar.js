import "./Navbar.css";
import Logo from "./../Images/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#about" className="logo">
          <img src={Logo} alt="logo_sunnyside" />
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </label>
        <div className="menu">
        <div id="triangle"></div>

          <ul className="list">
            <li className="list_container">
              <a href="#about">About</a>
            </li>
            <li className="list_container">
              <a href="#projects">Services</a>
            </li>
            <li className="list_container">
              <a href="#skills">Projects</a>
            </li>
            <li className="list_container">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
