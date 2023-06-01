import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const EditProduct=()=>{
    return(<>
        {/*Imported Header as component*/}
      <Header/>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Edit the Product 
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Kindly Edit all the necessary details of the product you want
              to Change.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="product-name"
                className="leading-7 text-sm text-gray-600"
              >
                Product Name
              </label>
              <input
                type="text"
                id="product-name"
                name="product-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="price"
                className="leading-7 text-sm text-gray-600"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="web-link"
                className="leading-7 text-sm text-gray-600"
              >
                Website Link
              </label>
              <input
                type="text"
                id="web-link"
                name="web-link"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                <label htmlFor="images">Select images of Product:</label>
                <br />
                <input type="file" id="images" name="images" multiple />
                <br />
                <input type="submit" value="Upload Images" name="submit" />
              </form>
            </div>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-5">
            <div className="flex items-center justify-between mt-4">
              <p className="font-medium mb-10">Tags:</p>
            </div>


            {/*      ---------------------       TAGS  -----------------------------------------------  */}
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">All Type</option>
                  <option value="for-rent">For Rent</option>
                  <option value="for-sale">For Sale</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Furnish Type</option>
                  <option value="fully-furnished">Fully Furnished</option>
                  <option value="partially-furnished">
                    Partially Furnished
                  </option>
                  <option value="not-furnished">Not Furnished</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Any Price</option>
                  <option value="1000">RM 1000</option>
                  <option value="2000">RM 2000</option>
                  <option value="3000">RM 3000</option>
                  <option value="4000">RM 4000</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Floor Area</option>
                  <option value="200">200 sq.ft</option>
                  <option value="400">400 sq.ft</option>
                  <option value="600">600 sq.ft</option>
                  <option value="800 sq.ft">800</option>
                  <option value="1000 sq.ft">1000</option>
                  <option value="1200 sq.ft">1200</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Bedrooms</option>
                  <option value="1">1 bedroom</option>
                  <option value="2">2 bedrooms</option>
                  <option value="3">3 bedrooms</option>
                  <option value="4">4 bedrooms</option>
                  <option value="5">5 bedrooms</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Bathrooms</option>
                  <option value="1">1 bathroom</option>
                  <option value="2">2 bathrooms</option>
                  <option value="3">3 bathrooms</option>
                  <option value="4">4 bathrooms</option>
                  <option value="5">5 bathrooms</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Bathrooms</option>
                  <option value="1">1 space</option>
                  <option value="2">2 space</option>
                  <option value="3">3 space</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Imported Footer aas a component*/}
      <Footer/>
    </>);
}

export default EditProduct;