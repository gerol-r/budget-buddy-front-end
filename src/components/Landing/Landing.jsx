import WelcomeBuddy from "../../Images/Welcome-buddy.png";

const Landing = () => {
	return (
    <div>
		<main style={{ marginLeft: "30px" }}>
			<h1>Take Control of Your Finances with Budget Buddy</h1>
			<p>
				Welcome to Budget Buddy — your simple, powerful tool for managing money
				with confidence. Create personalized budgets and track your spending!
			</p>
			<p>
				Organize your expenses by category like “Housing,” “Transportation,” or
				“Fun Money,” and get helpful reminders when you're close to your limits.
				Stay on track and make your money work for you!
			</p>
			<p>
				Ready to get started? <strong>Sign In</strong> or{" "}
				<strong>Sign Up</strong> now and start building better money habits
				today.
			</p>
      <div>
      <img src={WelcomeBuddy} alt="logo"  className="welcome-image"/>
      </div>
      
		</main>
    </div>
	);
};

export default Landing;
