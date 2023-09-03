import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import SignUpPage from "pages/SignUp";
import LogIn from "pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path="/" element={<Navigate to="signup"/>}/>
      </Routes>
    </Router>
  )

};

export default App;
