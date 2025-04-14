import { Routes, Route } from "react-router";

//** import components **//
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignupForm/SignupForm";
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
//** import components **//

import { UserContext } from './contexts/UserContext';

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </>
  );
}

export default App;
