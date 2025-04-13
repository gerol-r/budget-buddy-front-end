import { Routes, Route } from "react-router";

//** import components **//
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignupForm/SignupForm";
//** import components **//

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>hello world</h1>} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;
