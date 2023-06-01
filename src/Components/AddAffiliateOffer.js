import React, { useState } from "react";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import { toast } from "react-toastify";

const AddAffiliateOffer = () => {

  const [retailer_Email, setEmail] = useState("");
  const [storedID, setStoredID]=useState("");


  //FOR INPUT TAKING
  const [inf_comission, setComission]=useState("");
  const [endDate, setEndDate]=useState("");
  const [startDate, setStartDate]=useState("");
  const [sales, setSales]=useState("");
  const [URL, setURL]=useState("");
  
  
  const Com_Handler = (event) => {
    setComission(event.target.value);
  };

  const S_Date = (event) => {
    setStartDate(event.target.value);
  };

  const E_Date = (event) => {
    setEndDate(event.target.value);
  };

  const salesHandler = (event) => {
    setSales(event.target.value);
  };
  
  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const setURLHandler = (event) => {
    setURL(event.target.value);
  };

  //console.log(inf_comission+','+startDate+','+endDate+','+ sales+',' +URL);

  function addAffiliate(event){
    console.log(inf_comission+','+startDate+','+endDate+','+ sales+',' +URL);

  }
  var emailID="";
  async function EmailCheckHandler(event){
    event.preventDefault();
    //event.preventDefault();
    await GetRetailerID();
    //console.log(emailID);

  };


  async function GetRetailerID() {
    try {
      const response = await fetch(
        "http://localhost:80/retailers/email/temp/" + retailer_Email,
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
        emailID = data.email._id;
        setStoredID(data.email._id);
        console.log(emailID);
      } else if (data.message === "Email not found") {
        toast.error("Retailer NOT found");
      } else {
        console.log("Unexpected response:", data);
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }



  return (
    <>
      <Header />

      <section className="text-gray-600 body-font">

      <div className="flex flex-col text-center w-full mb-12">
          <h3 className="sm:text-2xl text-2xl font-small title-font mb-4 text-medium">
            Verify Email Address
          </h3>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="relative flex-grow w-full">
              <div className="flex justify-between">
                <div className="flex-grow mr-4">
                  {" "}
                  {/* Add a margin-right utility */}
                  <label
                    htmlFor="retailer-email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Enter your email to Verify
                  </label>
                  <input
                    type="email"
                    onChange={EmailHandler}
                    id="retailer-email"
                    name="retailer-email"
                    className="w-full bg-gray-500 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            id="i_submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={EmailCheckHandler}
          >
            Check Email
          </button>
        </div>



        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add a New Affiliate Offer
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Kindly fill out all the necessary details to sign a new Affiliate
              offer
            </p>
          </div>

          {/* Drop Down Menu */}

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end justify-center items-center">
            <label
              htmlFor="select"
              className="font-semibold block py-2 items-center justify-center"
            >
              Select Product:
            </label>

            <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Product 1</option>
              <option value="1000">Product 2</option>
              <option value="2000">Product 3</option>
              <option value="3000">Product 4</option>
              <option value="4000">Product 5</option>
            </select>

            <input
              type="checkbox"
              name="show_more"
              id="show_more"
              className="hidden peer"
              defaultChecked
            />
            <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
              <div className="cursor-pointer group">
                <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  Python
                </a>
              </div>
              <div className="cursor-pointer group border-t">
                <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">
                  Javascript
                </a>
              </div>
              <div className="cursor-pointer group border-t">
                <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  Node
                </a>
              </div>
              <div className="cursor-pointer group border-t">
                <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  PHP
                </a>
              </div>
            </div>
          </div>

          {/* Values input */}

          <br />
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="commission" className="leading-7 text-sm text-gray-600">
                Commission
              </label>
              <input
                type="number"
                onChange={Com_Handler}
                id="commission"
                name="commission"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="startdate" className="leading-7 text-sm text-gray-600">
                Start Date
              </label>
              <input
                type="date"
                id="startdate"
                onChange={S_Date}
                name="startdate"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="sales" className="leading-7 text-sm text-gray-600">
                Targeted Sales
              </label>
              <input
                type="number"
                id="sales"
                onChange={salesHandler}
                name="T_Sales"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="expirydate" className="leading-7 text-sm text-gray-600">
                Expiry Date
              </label>
              <input
                type="date"
                id="expirydate"
                name="expirydate"
                onChange={E_Date}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          

          



          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="targetsales" className="leading-7 text-sm text-gray-600">
                Sale URL
              </label>
              <input
                type="url"
                id="saleURL"
                name="saleURL"
                onChange={setURLHandler}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={addAffiliate} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer imported from a component */}
      <Footer />
    </>
  );
};

export default AddAffiliateOffer;
