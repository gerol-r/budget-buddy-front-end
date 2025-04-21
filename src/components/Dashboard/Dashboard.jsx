import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import WelcomeBuddy from "../../Images/Welcome-buddy.png";


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


    return (

        <main>
            <h1>Welcome! {user.username} <img
              src={user?.avatar}
              alt="User Avatar"
              style={{ width: "50px", borderRadius: "50%" }}
            />!</h1>
            <div>
                <img src={WelcomeBuddy} alt="logo"  className="welcome-image"/>
            </div>
        </main>
    )
}

export default Dashboard;

