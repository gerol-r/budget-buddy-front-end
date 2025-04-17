import { createContext, useState } from "react";

const UserContext = createContext();

const getUserFromToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;
  
  try {
    // Split token and verify it has 3 parts
    const parts = token.split('.');
    if (parts.length !== 3) return null;

      // Decode the payload (middle part)
      const payload = JSON.parse(atob(parts[1]));
      return payload;
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token"); // Clear invalid token
      return null;
    }  
};

function UserProvider({ children }) {
  const [user, setUser] = useState(getUserFromToken());

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
//   create user state and setUser function; make accessible to children.
export { UserProvider, UserContext };
