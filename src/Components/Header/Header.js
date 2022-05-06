import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Arrow from "./../Images/icon-arrow-down.svg";

export default function Header() {
  return (
    <>
      <header className="header_container">
        <Navbar />
        <div className="middle_container">
          <h1>WE ARE CREATIVES</h1>
          <img src={Arrow} alt="arrow" />
        </div>
      </header>
      
    </>
  );
}
