import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user } = useContext(UserContext);
  console.log(user)
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav>
      {user ? (
        <ul style={{ listStyleType: "none" }}>
          <li>
            Hey there, {user.username}
            <img
              src={user?.avatar}
              alt="User Avatar"
              style={{ width: "50px", borderRadius: "50%" }}
            />
            !
          </li>
          <li>
            <h3>Welcome to Budget Buddy!</h3>
          </li>
          <li><Link to='/'>Dashboard</Link></li>
          <li>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          <li><Link to='/'>Home</Link></li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default NavBar;
