import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import InfluencerDashBoard from "./Components/InfluencerDashboard";
import RetailerDashboard from "./Components/RetailerDashboard";
import ChangePassowrd from "./Components/UI/ChangePassword";
import AddAffiliateOffer from "./Components/AddAffiliateOffer";
import Product from "./Components/UI/Product";
import EditProduct from "./Components/UI/EditProduct";



function App() {

  
  return (
    <>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>}/>
          <Route path="changepassword" element={<ChangePassowrd/>}/>
          <Route path="login/signup" element={<SignUp/>}/>
          <Route path="influencerdashboard" element={<InfluencerDashBoard/>}/>
          <Route path="retailerdashboard" element={<RetailerDashboard/>}/>
          <Route path="addaffiliateoffer" element={<AddAffiliateOffer/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="editproduct" element={<EditProduct/>}/>
          
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
