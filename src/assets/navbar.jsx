import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Velox Virtual Charter</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/join" className="navbar-link">Join</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
