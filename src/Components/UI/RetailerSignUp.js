import React, { useState } from "react";
import { toast } from "react-toastify";
import ErrorModal from "../Message/ErrorModal"
import './SignUp.css';

const RetailerSignUp = () => {

    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[companyName, setCompanyName]=useState("");
    const[address, setAddress]=useState("");
    const[description, setDescription]=useState("");
    const[website, setWebsite]=useState("");
    const[bankName, setBankName]=useState("");
    const[bankNumber, setBankNumber]=useState("");

    //Handler functions to take input
    const nameHandler=(event)=>{
        setCompanyName(event.target.value);
    }
    const descriptionHandler=(event)=>{
        setDescription(event.target.value);
    }

    const addressHandler=(event)=>{
        setAddress(event.target.value);
    }
    const websiteHandler=(event)=>{
        setWebsite(event.target.value);
    }
    const emailHandler=(event)=>{
        setEmail(event.target.value);
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    const bankNameHandler=(event)=>{
        setBankName(event.target.value);
    }
    const bankNumberHandler=(event)=>{
        setBankNumber(event.target.value);
    }

    //State for error managment
  const [errorMessage, setError]=useState("");

    //Sign Up Button Handler
    const RetailerSignUp=(event)=>{

        //prevent the refreshing of page
    event.preventDefault();

    //checking for empty detalis
    if(companyName.trim().length===0 || description.trim().length===0 ||email.trim().length===0 || website.trim().length===0 || 
        password.trim().length===0 || address.trim().length===0  || bankNumber.trim().length===0 || bankName.trim().length===0){
            setError({
              title: "Empty Inputs",
              message:"Please provide all the details!"
            });
            return;
        }

    if(+bankNumber<0){
      setError({
        title: "Invalide Comission",
        message:"Please provide valide comission(non-negative value)"
      });
      return;
    }

    //Verify Email

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

   
      setError({
        title: "Invalid Email",
        message: "Email must contain @ and .com"
      });

      
      return;
    }


    //Sending data to Node.js to Store in Data Base
    fetch("http://localhost:80/retailers/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name:companyName,
        email:email,
        password:password,
        address:address,
        website:website,
        description:description,
        bankDetails: {
          bankName: bankName,
          bankAccount: bankNumber,
        },
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Handle the response data
        console.log(data); // You can check the response data in the console
        if (data.message === "Retailer Created") {
          // Show a success message or perform any desired actions
          // For example, you can display a success notification using a library like react-toastify
          toast.success("Retailer created successfully!");
        } else {
          // Show an error message or handle other cases
          // For example, you can display an error notification
          toast.error("Failed to create Retailer!");
        }
      })
      .catch((error) => {
        // Handle any errors during the request
        console.error("Error:", error);
      });

    }

    //function to clear the screen the error message
  const errorHandler=()=>{
    setError(null);
  }
    

 


  return(

    <>
        {errorMessage && <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorHandler}/>}
        <section id="reLogInSec" className="text-gray-600 body-font back">
        <div className="container px-5 py-5 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Sign Up as a Retailer</h1>
                <p className="leading-relaxed mt-4">To generate revenue through sales per click here's your chance to make big</p>
            </div>
            <div className="px-4 lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                <div className="relative mb-4">
                    <label htmlFor="companyName" className="leading-7 text-sm text-gray-600">Company Name</label>
                    <input type="text" id="companyName" name="companyName" onChange={nameHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="Description" className="leading-7 text-sm text-gray-600">Description</label>
                    <input type="text" id="Description" name="Description" onChange={descriptionHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="Address" className="leading-7 text-sm text-gray-600">Address</label>
                    <input type="text" id="Address" name="Address" onChange={addressHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="website" className="leading-7 text-sm text-gray-600">Website</label>
                    <input type="text" id="website" name="website" onChange={websiteHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="Ret_email" name="email" onChange={emailHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

                <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="Ret_password" name="password"onChange={passwordHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

                <div className="relative mb-4">
                    <label htmlFor="bankName" className="leading-7 text-sm text-gray-600">Bank Name</label>
                    <input type="text" id="Ret_bankName" name="bankName" onChange={bankNameHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="bankNumber" className="leading-7 text-sm text-gray-600">Bank Number(IBAN)</label>
                    <input type="number" id="Ret_bankNumber" name="bankNumber" onChange={bankNumberHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button onClick={RetailerSignUp} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                <p className="text-xs text-gray-500 mt-3">Terms and conditions are applied</p>
            </div>
        </div>
    </section>
    </>
  );

  
    
};

export default RetailerSignUp;
