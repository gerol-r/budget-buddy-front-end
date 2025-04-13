import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav>
      {user ? (
        <ul style={{ listStyleType: "none" }}>
          <li>Welcome to Budget Budy, {user.username}!</li>
          <li>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
