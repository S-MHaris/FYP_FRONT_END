import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { toast } from "react-toastify";
import ErrorModal from "../Message/ErrorModal";

const ChangePassowrd = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [con_password, setCon_Password] = useState("");

  //State for error managment
  const [errorMessage, setError] = useState("");

  const emailHandler = (event) => {
    event.preventDefault();

    setEmail(event.target.value);
  };

  const newPasswordHandler = (event) => {
    event.preventDefault();

    setPassword(event.target.value);
  };
  const confPasswordHandler = (event) => {
    event.preventDefault();

    setCon_Password(event.target.value);
  };

  var id = ""; //to store the id of user
  var user = "No_User"; //to check the type of user

  async function verifyBtn() {
    //Fetching retailer data if  he/she is retailer
    //Making wait for completion
    await f_Influencer();

    //Still user type is not detemined, fetch 2nd API
    if (user === "No_User") {
      await f_Retailer();
    }

    //No record after 2nd fetch
    if (user === "No_User") {
      toast.error("No Record Found!!");
    }
  }

  //function to fetch Influencer details
  async function f_Influencer() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_ENDPOINT + "influencers/temp/" + email,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.message === "Email found") {
        toast.success("Influencer Verified!!");

        //setting the user type influencer
        user = "Influencer";

        console.log(data.email._id);

        //setting the ID of Influencer
        id = data.email._id;

        console.log(user);
      } else {
        console.log("Unexpected response:", data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //function to fetch Retailer details
  async function f_Retailer() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_ENDPOINT + "retailers/email/temp/" + email,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.message === "Email found") {
        toast.success("Retailer Verified!!");
        //setting the user type influencer
        user = "Retailer";

        console.log(data.email._id);

        //setting the ID of Influencer
        id = data.email._id;
        console.log(user);
      } else {
        console.log("Unexpected response:", data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //Change Button
  async function changePass_Btn() {
    //console.log(id);

    //data to change
    const change = [{ propname: "password", value: password }];

    if (user === "Retailer") {
      //console.log("User is Reatiler")

      retailer_ChnagePassword(id, change);
    } else if (user === "Influencer") {
      console.log("User is Influencer");
    } else {
      //No user Found so no password change
      setError({
        title: "Verify Email",
        message: "Please verify yourself by enterying your Emil",
      });
      return;
    }
  }

  //Retailer Change Password
  async function retailer_ChnagePassword(userId, data) {}

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
      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Change Password
            </h1>
            <p className="leading-relaxed mt-4">
              By confirming this you are changing your password, which will
              required at new login
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Update your Password
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Verify your email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={emailHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={verifyBtn}
              className="text-white bg-indigo-500 border-0 py-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Verify
            </button>
            <br />
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={newPasswordHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="cpassword"
                className="leading-7 text-sm text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                onChange={confPasswordHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={changePass_Btn}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              By confirming this you are changing your password, which will
              required at new login
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChangePassowrd;
