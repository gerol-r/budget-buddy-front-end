import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/authService.js";
import { UserContext } from "../../contexts/UserContext.jsx";
import SignupFormBuddy from "../../Images/signup-buddy.png";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
    income: "",
    savingsGoal: "",
  });

  const { username, password, passwordConf, income, savingsGoal } = formData;

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      toast.success("Sign Up Successful!");
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main className="b-form-page">
      <div style={{ position: "relative", width: "484px", height: "750px" }}>
        {/* Image */}
        <img
          src={SignupFormBuddy}
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
            height: "383px",

            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Form content */}
          <form className="budget-form" onSubmit={handleSubmit}>
            <h4>Sign Up For Budget Buddy</h4>
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
            <div id="b-form-group">
              <label htmlFor="confirm">Confirm Password:</label>
              <input
                type="password"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={handleChange}
                required
              />
            </div>
            <div id="b-form-group">
              <label htmlFor="income">Income:</label>
              <input
                type="number"
                id="income"
                value={income}
                name="income"
                onChange={handleChange}
                required
              />
            </div>
            <div id="b-form-group">
              <label htmlFor="savingsGoal">Savings Goal:</label>
              <input
                type="number"
                id="savingsGoal"
                value={savingsGoal}
                name="savingsGoal"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button
                style={{ marginRight: "20px" }}
                disabled={isFormInvalid()}
              >
                Sign Up
              </button>
              <button
                style={{ marginLeft: "20px" }}
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUpForm;
