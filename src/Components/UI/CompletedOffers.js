import React from "react";
import { Link } from "react-router-dom";


//stroke-width
const CompletedOffers = (props) => {
  return (
    <>
      <section id="reLogInSec" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {props.CompletdDescription}
                </h2>

                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-800 text-medium">
                  Price
                </span>
                <span className="mt-1 text-gray-900 text-lg">{props.CompletedDate}</span>
              </div>
                <p className="leading-relaxed">
                  {props.CompletdDetail}
                </p>
                <div className="flex justify-end">
                  <Link className="text-indigo-500 inline-flex items-center mt-4" to={props.redirect}>
                  {props.para3}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default CompletedOffers;
