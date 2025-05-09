import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";
import BudgetFormBuddy from "../../Images/budget-form-buddy.png";
import { toast } from "react-toastify";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const signedInUser = await signIn(formData);
      setUser(signedInUser);
      toast.success("Signed In Successfully!");
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <main className="b-form-page">
      <div style={{ position: "relative", width: "484px", height: "654px" }}>
        {/* Image */}
        <img
          src={BudgetFormBuddy}
          alt="Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Form */}
        <div
          style={{
            position: "absolute",
            top: "270px",
            left: "120px",
            width: "232px",
            height: "229px",

            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Form content */}
          <form className="budget-form" onSubmit={handleSubmit}>
            <div id="b-form-group">
              <label htmlFor="username">Username:</label>
              <input
                required
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div id="b-form-group">
              <label htmlFor="password">Password:</label>
              <input
                required
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignInForm;
