
import { Routes, Route, useNavigate } from 'react-router';


//** import components **//
import SignUpForm from "./components/SignupForm.jsx";
//** import components **//





function App() {


  return (
    <>
      {/* nav bar here- do we need a nav bar? modals instead? */}
      <Routes>
        <Route path='/' element= {<h1>hello world</h1>} />
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;
