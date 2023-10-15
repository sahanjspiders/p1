import { IconName } from "react-icons/fa";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home3 from "./Components/Home3";
import Home4 from "./Components/Home4";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from "./Components/Main";
import Myorder from "./Components/Myorder";
import LoginForm from "./Login/Login";
import Signup from "./Signup/Signup"



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
 <Routes>
  <Route path="/"  element={<Home/>} />
  <Route path="Explore" element={<Home2/>}/>
  <Route path="Myorder" element={<Myorder/>}/>
  <Route path="Login" element={<LoginForm/>} />
  <Route path="Signup" element={<Signup/>}  />
 </Routes>
 <Home4/>
</BrowserRouter>
  
      

    </div>
  );
}

export default App;