import logo from "./assets/react.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <h2>Profile</h2>
      <h2>About</h2>
      <h2>Cnntact</h2>
    </nav>
  );
};

export default Header;
