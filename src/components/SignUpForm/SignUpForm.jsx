import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/authService.js";
import { UserContext } from "../../contexts/UserContext.jsx";
import BudgetFormBuddy from "../../Images/budget-form-buddy.png";
import { toast } from 'react-toastify';

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
			console.log(newUser);
			setUser(newUser);
      toast.success("Sign Up Successful!")
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
						top: "270px" /* Adjust based on the specific part of the image */,
						left: "120px" /* Adjust based on the specific part of the image */,
						width: "232px",
						height: "229px",

						borderRadius: "8px" /* Optional: Add rounded corners */,
						boxShadow:
							"0 4px 8px rgba(0, 0, 0, 0.3)" /* Optional: Add a shadow for better visibility */,
					}}
				>
					{/* Form content */}
					<form className="budget-form" onSubmit={handleSubmit}>
            <p>Sign Up For Budget Buddy</p>
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
                autoComplete='off'
								name="password"
								id="password"
								value={formData.password}
								onChange={handleChange}
							/>
						</div>
            <div id="b-form-group">
              <label htmlFor="confirm">Confirm Password:</label>
              <input type="password" 
              id="confirm"
              value={passwordConf}
              name="passwordConf"
              onChange={handleChange}
              required
              />
            </div>
            <div id="b-form-group">
              <label htmlFor="income">Income:</label>
              <input type="number" 
              id="income"
              value={income}
              name="income"
              onChange={handleChange}
              required
              />
            </div>
            <div id="b-form-group">
              <label htmlFor="savingsGoal">Savings Goal:</label>
              <input type="number" 
              id="savingsGoal"
              value={savingsGoal}
              name="savingsGoal"
              onChange={handleChange}
              required
              />
            </div>
            <div>
					<button disabled={isFormInvalid()}>Sign Up</button>
					<button onClick={() => navigate("/")}>Cancel</button>
				</div>
      </form>
      </div>
			</div>
		</main>
	);
};

export default SignUpForm;
