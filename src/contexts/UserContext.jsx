import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const getUserFromToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    // Split token and verify it has 3 parts
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    // Decode the payload (middle part)
    const payload = JSON.parse(atob(parts[1]));
    return payload;
  } catch (err) {
    localStorage.removeItem("token"); // Clear invalid token
    return null;
  }
};

// NEW: Added localStorage user cache with fallback to JWT decoding
const getUserData = () => {
  // Check localStorage first for performance
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    try {
      return JSON.parse(storedUser);
    } catch {
      localStorage.removeItem("user");
    }
  }
  // Fallback to JWT parsing
  return getUserFromToken();
};

function UserProvider({ children }) {
  const [user, setUser] = useState(getUserData());

  // NEW: Sync auth state across browser tabs
  useEffect(() => {
    const handleStorageChange = () => {
      setUser(getUserData());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // NEW: Wrapped setter to keep localStorage in sync
  const updateUser = (newUser) => {
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
    setUser(newUser);
  };

  const value = { user, setUser: updateUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
