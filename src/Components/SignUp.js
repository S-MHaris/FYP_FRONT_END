import React from "react";
import Header from "./UI/Header";
import InfluencerSignUp from "./UI/InfluencerSignUp";
import RetailerSignUp from "./UI/RetailerSignUp";
import Footer from "./UI/Footer";
import Tabs from "./UI/Tabs";

const SignUp = () => {
  const para1='Influencer';
  const para2='Retailer';
  

  return (
    <>
      <Header />
      <Tabs para1={para1} para2={para2}/>
      <InfluencerSignUp />
      <RetailerSignUp />
      <Footer />
    </>
  );
};

export default SignUp;
