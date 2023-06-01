import React from "react";
import Header from "./UI/Header";
import Influencer from "./UI/InfluencerLogin";
import Retailer from "./UI/RetailerLogin";
import Footer from "./UI/Footer";
import Tabs from "./UI/Tabs";

const Login = (props) => {
  const para1='Influencer';
  const para2='Retailer';


  return (
    <>
      <Header />

      <Tabs para1={para1} para2={para2}/>

      <Retailer/>
      <Influencer />

      <Footer />
    </>
  );
};
export default Login;
