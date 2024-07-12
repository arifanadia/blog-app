import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
      
    </div>
  );
};



const App = () => {
  return (
   <Routes>
    <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}></Route>
    </Route>
    <Route path="/login" element={<Login/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
   </Routes>
  );
};

export default App;