import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-2">
      <Link to="/" className="navlink">
        Home
      </Link>
      <Link to="/money-love" className="navlink">
        Money Love
      </Link>
      <Link to="/merch" className="navlink">
        Merch
      </Link>
    </nav>
  );
};

export default Navbar;
