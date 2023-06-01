import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { toast } from "react-toastify";
import ErrorModal from "../Message/ErrorModal";
const Product = (props) => {
  //useState for inputs
  const [retailer_Email, setEmail] = useState("");
  
  const [name, setPro_Name] = useState("");
  const [price, setPro_Price] = useState("");
  const [description, setPro_Description] = useState("");
  const [Pro_Type, set_Type] = useState("");
  const [Fur_Type, setFurnishedType] = useState("");
  const [Price, setPro_PriceTag] = useState("");
  const [area, setAreaTag] = useState("");
  const [storedID, setStoredID]=useState("");
  const [band_Name, setBrandTag] = useState("");

  //State for error managment
  const [errorMessage, setError] = useState("");

  //input Handlers to take input
  const nameHandler = (event) => {
    setPro_Name(event.target.value);
  };

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const priceHandler = (event) => {
    setPro_Price(event.target.value);
  };

  const descriptionHandler = (event) => {
    setPro_Description(event.target.value);
  };

  const Pro_TypeHandler = (event) => {
    set_Type(event.target.value);
  };
  const Fur_TypeHandler = (event) => {
    setFurnishedType(event.target.value);
  };
  const PriceHandler = (event) => {
    setPro_PriceTag(event.target.value);
  };
  const band_NameHandler = (event) => {
    setBrandTag(event.target.value);
  };
  const areaHandler = (event) => {
    setAreaTag(event.target.value);
  };

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
  
  
  

  const tags = [];
  var productID="";

  async function AddProductHandler(event){
    //console.log(name+','+price+','+description+','+Pro_Type+','+Fur_Type+','+Price+','+area+','+band_Name);

    //prevent the refreshing of page
    event.preventDefault();

    //checking for empty detalis
    if (
      name.trim().length === 0 ||
      price.trim().length === 0 ||
      description.trim().length === 0
    ) {
      setError({
        title: "Empty Inputs",
        message: "Please provide all the details!",
      });
      return;
    }

    if (+price < 0) {
      setError({
        title: "Invalide Price",
        message: "Please provide enter valid price(non-negative value)",
      });
      return;
    }

    
    tags.push(Pro_Type);
    tags.push(Fur_Type);
    tags.push(Price);
    tags.push(area);
    tags.push(band_Name);

    //Add data by calling  addProduct  Function
    
    await addProduct();

    console.log(productID);
    console.log(storedID);
    
    //Assign product id to a retailer using retailer id 
    
    await assignProduct(productID, storedID);

    
  };









  

  //Function to Assign product ID using ASYNC fetch function

  async function assignProduct(p_id, ret_id){

    //console.log(p_id, ret_id);
    try {
      await fetch("http://localhost:80/retailers/addProduct/" + ret_id, {
        method: "PATCH",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          productId: p_id,
        }),
      });
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  














    //Function add Product using ASYNC fetch function
    async function addProduct(){



    try {
      const response = await fetch("http://localhost:80/products/", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          price,
          description,
          tags,
          images: "",
        }),
      });
  
      const data = await response.json();
  
      console.log(data);
  
      if (data.message === "Product Created") {
        toast.success("Product Added!");

        productID=data.productId;
        //console.log(productID)
      } else {
        toast.error("Failed to add product!!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  

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
      {/*Imported Header as component*/}
      <Header />
      <section className="text-gray-800 body-font background text-medium">
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

        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add a New Product
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-medium text-gray-900">
              Kindly fill out all the necessary details of the product you want
              to advertise
            </p>
          </div>

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="product-name"
                className="leading-7 text-medium text-gray-900"
              >
                Product Name
              </label>
              <input
                type="text"
                onChange={nameHandler}
                id="product-name"
                name="product-name"
                className="w-full bg-gray-500 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="price"
                className="leading-7 text-lg text-black-900"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                onChange={priceHandler}
                className="w-full bg-gray-500 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="description"
                className="leading-7 text-medium text-gray-900"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                onChange={descriptionHandler}
                className="w-full bg-gray-500 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-5 mb-5">
            <div className="relative flex-grow w-full">
              <form
                action="/upload-images"
                method="post"
                encType="multipart/form-data"
              >
                <label htmlFor="images" className="text-medium text-gray-900">
                  Select images of Product:
                </label>
                <br />
                <input type="file" id="images" name="images" multiple />
                <br />
                <input
                  type="submit"
                  className="text-medium text-gray-900"
                  value="Upload Images"
                  name="submit"
                />
              </form>
            </div>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-5">
            <div className="flex items-center justify-between mt-4">
              <p className="font-medium mb-10 text-lg text-black-900">Tags:</p>
            </div>

            {/*      ---------------------       TAGS  -----------------------------------------------  */}
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  value={Pro_Type}
                  onChange={Pro_TypeHandler}
                >
                  <option value="">All Type</option>
                  <option value="for-rent">For Rent</option>
                  <option value="for-sale">For Sale</option>
                </select>

                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  value={Fur_Type}
                  onChange={Fur_TypeHandler}
                >
                  <option value="">Furnish Type</option>
                  <option value="fully-furnished">Fully Furnished</option>
                  <option value="partially-furnished">
                    Partially Furnished
                  </option>
                  <option value="not-furnished">Not Furnished</option>
                </select>

                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  value={Price}
                  onChange={PriceHandler}
                >
                  <option value="">Any Price</option>
                  <option value="1000">RM 1000</option>
                  <option value="2000">RM 2000</option>
                  <option value="3000">RM 3000</option>
                  <option value="4000">RM 4000</option>
                </select>

                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  value={area}
                  onChange={areaHandler}
                >
                  <option value="">Floor Area</option>
                  <option value="200">200 sq.ft</option>
                  <option value="400">400 sq.ft</option>
                  <option value="600">600 sq.ft</option>
                  <option value="800 sq.ft">800</option>
                  <option value="1000 sq.ft">1000</option>
                  <option value="1200 sq.ft">1200</option>
                </select>

                <select
                  className="px-4 py-3 w-full rounded-md bg-gray-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  value={band_Name}
                  onChange={band_NameHandler}
                >
                  <option value="">Brands</option>
                  <option value="Samsung"> Samsung</option>
                  <option value="Outfitters"> Outfitters</option>
                  <option value="Dawlance"> Dawlance</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            id="i_submit"
            onClick={AddProductHandler}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Product
          </button>
        </div>
      </section>

      {/*Imported Footer aas a component*/}
      <Footer />
    </>
  );
};

export default Product;
