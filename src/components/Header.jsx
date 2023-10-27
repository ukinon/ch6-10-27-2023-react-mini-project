import logo from "../assets/investment-calculator-logo.png";
import "../components/Header.css";

function Header() {
  return (
    <header id="header" className="">
      <img src={logo} alt="logo"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
