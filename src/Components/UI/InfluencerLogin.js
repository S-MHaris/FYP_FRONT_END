import React, { useState } from "react";
import ErrorModal from "../Message/ErrorModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const InfluencerLogin = () => {
  //States for getting email and password
  const [InfluencerEmail, setInfluencerEmail] = useState("");
  const [InfluencerPassword, setInfluencerPassword] = useState("");

  //state for error checking
  const [errorMessage, setError] = useState("");

  //Functions to Handle inputs
  const emailHandler = (event) => {
    setInfluencerEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setInfluencerPassword(event.target.value);
  };

  const navigate = useNavigate();

  //Login Button Handler
  const SignInHandler = (event) => {
    //prevent the refreshing of page
    event.preventDefault();

    //checking for empty detalis
    if (
      InfluencerEmail.trim().length === 0 ||
      InfluencerPassword.trim().length === 0
    ) {
      setError({
        title: "Empty Inputs",
        message: "Please provide all the details!",
      });

      return;
    }

    //Verify Email

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(InfluencerEmail)) {
      setError({
        title: "Invalid Email",
        message: "Email must contain @ and .com",
      });

      return;
    }

    //console.log(InfluencerEmail+','+InfluencerPassword);

    //fetch function for Login
    fetch(process.env.REACT_APP_API_ENDPOINT + "influencers/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: InfluencerEmail,
        password: InfluencerPassword,
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Handle the response data
        console.log(data); // You can check the response data in the console
        if (data.message === "Auth Successful") {
          // Show a success message or perform any desired actions
          // For example, you can display a success notification using a library like react-toastify
          navigate("/influencerdashboard");
          toast.success("Successfully Login as Influencer!");
        } else {
          // Show an error message or handle other cases
          // For example, you can display an error notification
          toast.error("Failed to Login influencer!");
        }
      })
      .catch((error) => {
        // Handle any errors during the request
        console.error("Error:", error);
      });
  };

  //function to clear the screen the error message
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {errorMessage && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          onConfirm={errorHandler}
        />
      )}
      <section
        id="infLogInSec"
        className="text-gray-600 body-font hidden background"
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Login as a Influencer
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Make sure that you are registered user if not, kindly make an
              account first
            </p>
          </div>
          <div className="container px-5 py-20 mx-auto flex flex-wrap items-center lg:w-2/6 md:w-1/3 bg-gray-100 rounded-lg flex flex-col">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="i_email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="i_email"
                name="i_email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={emailHandler}
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="i_password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="i_password"
                name="i_password"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={passwordHandler}
              />
            </div>
            <button
              id="i_submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 justify-center"
              onClick={SignInHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfluencerLogin;
