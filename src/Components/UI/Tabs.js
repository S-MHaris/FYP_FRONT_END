import React from "react";

const Tabs = (props) => {
  const disableClasses = [
    "border-transparent",
    "hover:text-gray-600",
    "hover:border-gray-300",
    "dark:hover:text-gray-300",
  ];

  const activeClasses = [
    "text-blue-600",
    "border-blue-600",
    "active",
    "dark:border-blue-500",
  ];

  const lgRe = () => {
    const loginInfluencer = document.getElementById("infLogInSec");
    const loginRetailer = document.getElementById("reLogInSec");
    loginRetailer.classList.remove("hidden");
    loginInfluencer.classList.add("hidden");
    const rText = document.getElementById("rText");
    const iText = document.getElementById("iText");
    for (let x in disableClasses) {
      rText.classList.remove(disableClasses[x]);
      iText.classList.add(disableClasses[x]);
    }
    for (let x in activeClasses) {
      rText.classList.add(activeClasses[x]);
      iText.classList.remove(activeClasses[x]);
    }
  };

  const lgInf = () => {
    const loginInfluencer = document.getElementById("infLogInSec");
    const loginRetailer = document.getElementById("reLogInSec");
    const rText = document.getElementById("rText");
    const iText = document.getElementById("iText");
    loginRetailer.classList.add("hidden");
    loginInfluencer.classList.remove("hidden");
    for (let x in disableClasses) {
      rText.classList.add(disableClasses[x]);
      iText.classList.remove(disableClasses[x]);
    }
    for (let x in activeClasses) {
      rText.classList.remove(activeClasses[x]);
      iText.classList.add(activeClasses[x]);
    }
  };

  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button
                id="rText"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                onClick={lgRe}
              >
                {props.para2}
              </button>
            </li>
            <li className="mr-2">
              <button
                id="iText"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                aria-current="page"
                onClick={lgInf}
              >
                {props.para1}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabs;
