import React, { useState } from "react";
import { toast } from "react-toastify";
import ErrorModal from "../Message/ErrorModal"
import './SignUp.css';

const InfluenceSignUp = () => {
  const [name, setFullName] = useState("");
  const [socials, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comission, setComission] = useState("");
  const [accountNumber, setBankNumber] = useState();
  const [bankName, setBankName] = useState("");

  //State for error managment
  const [errorMessage, setError]=useState("");

  //Code For SignUp Button Handler
  const signUpButtonHandler = (event) => {
    //prevent the refreshing of page
    event.preventDefault();

    //checking for empty detalis
    if(name.trim().length===0 || socials.trim().length===0 ||email.trim().length===0 ||
        password.trim().length===0 || comission.trim().length===0  || accountNumber.trim().length===0 || bankName.trim().length===0){
            setError({
              title: "Empty Inputs",
              message:"Please provide all the details!"
            });
            return;
        }

    if(+comission<0){
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
    fetch("http://localhost:80/influencers/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        comission,
        socials,
        bankDetails: {
          bankName: bankName,
          bankAccount: accountNumber,
        },
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Handle the response data
        console.log(data); // You can check the response data in the console
        if (data.message === "Influencer Created") {
          // Show a success message or perform any desired actions
          // For example, you can display a success notification using a library like react-toastify
          toast.success("Influencer created successfully!");
        } else {
          // Show an error message or handle other cases
          // For example, you can display an error notification
          toast.error("Failed to create influencer!");
        }
      })
      .catch((error) => {
        // Handle any errors during the request
        console.error("Error:", error);
      });
  };

  //Handler for inputs
  const setNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const setLinkHandler = (event) => {
    setLink(event.target.value);
  };

  const setEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const setPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const setComHandler = (event) => {
    setComission(event.target.value);
  };

  const setBankNoHandler = (event) => {
    setBankNumber(event.target.value);
  };

  const setBankNameHandler = (event) => {
    setBankName(event.target.value);
  };

  //function to clear the screen the error message
  const errorHandler=()=>{
    setError(null);
  }

  return (
    <>
      {errorMessage && <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorHandler}/>}
      <section id="infLogInSec" className="text-gray-600 body-font  hidden back">
      <div className="container px-5 py-5 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Sign Up as an Influencer
            </h1>
            <p className="leading-relaxed mt-4">
              To generate revenue through sales per click here's your chance to
              make big
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={setNameHandler}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="social-link1"
                className="leading-7 text-sm text-gray-600"
              >
                Social Media Page Link # 1
              </label>
              <input
                type="text"
                id="social1"
                name="socail-link1"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={setLinkHandler}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user-email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={setEmailHandler}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="email"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={setPasswordHandler}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="influencerComission"
                className="leading-7 text-sm text-gray-600"
              >
                Base Line Comission
              </label>
              <input
                type="number"
                id="comission"
                name="comission"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={setComHandler}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="bankName"
                className="leading-7 text-sm text-gray-600"
              >
                Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={setBankNameHandler}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="bankNumber"
                className="leading-7 text-sm text-gray-600"
              >
                Bank Number(IBAN)
              </label>
              <input
                type="number"
                id="bankNumber"
                name="bankNumber"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={setBankNoHandler}
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={signUpButtonHandler}
            >
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Terms and conditions are applied
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfluenceSignUp;
