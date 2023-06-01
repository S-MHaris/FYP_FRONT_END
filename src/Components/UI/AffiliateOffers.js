import React from "react";
import { Link } from "react-router-dom";

//strokeWidth
const AffiliateOffers = (props) => {
  return (
    <>
      <section id="infLogInSec" className="text-gray-600 body-font hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {props.NewTitle}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{props.NewDate}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {props.NewDescription}
                </h2>
                <p className="leading-relaxed">
                  {props.NewDetail}
                </p>
                <div className="flex justify-end">
                  <Link className="text-indigo-500 inline-flex items-center mt-4" to="/product">
                    
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Onplus 10T
                </span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Oneplus 10T - The Next Gen Smartphone
                </h2>
                <p className="leading-relaxed">
                  Smart tech OnePlus will unveil the 10 smartphones. OnePlus is
                  working on a next-generation smartphone, the coming smartphone
                  will be in a 10th-series of phones. This is a flagship device
                  of the company and will be called OnePlus 10. The smartphone
                  will be powered by one of the latest chipsets available for
                  smartphones in the market that is called Qualcomm Snapdragon 8
                  Gen1. Also, there is a powerful GPU of Adreno 660. The new
                  OnePlus's 10 has got a 2.84 GHz Octa-Core processor under the
                  hood of this handset.
                </p>
                <div className="flex justify-end">
                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AffiliateOffers;
