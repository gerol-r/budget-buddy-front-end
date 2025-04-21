import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import WelcomeBuddy from "../../Images/Welcome-buddy.png";
import * as userService from "../../services/userService"

const Dashboard = () => {

    const { user } = useContext(UserContext);

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