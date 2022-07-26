import Signup from "./signup";
import Login from "./login";
import './App.css';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Users from "./users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/log" element={<Login />}/>
        <Route path="/reg" element={<Signup />}/>
        <Route path="/user" element={<Users />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
