import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <main>
      <h1>
        Welcome to the Home Page {user.username}{" "}
        <img
          src={user?.avatar}
          alt="User Avatar"
          style={{ width: "50px", borderRadius: "50%" }}
        />
        !
      </h1>
    </main>
  );
};

export default Dashboard;
