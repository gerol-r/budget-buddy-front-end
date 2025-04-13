import { Routes, Route } from "react-router";

//** import components **//
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignupForm/SignupForm";
import SignInForm from './components/SignInForm/SignInForm';
//** import components **//

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>hello world</h1>} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </>
  );
}

export default App;
