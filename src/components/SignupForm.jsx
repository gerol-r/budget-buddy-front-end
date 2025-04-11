import { useState } from "react";
import { useNavigate } from "react-router";

const SignUpForm = () => {
  const navigate = useNavigate();
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
    console.log(formData);
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main>
      <h1>Sign Up for Budget Buddy</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            required
          />
          <div>
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
          <div>
            {/* add savings goal to user model? */}
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
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignUpForm;
