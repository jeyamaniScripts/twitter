import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import Signup from "./pages/auth/Signup.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
