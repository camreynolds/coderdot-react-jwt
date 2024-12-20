import './App.css';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
