import React, { useState } from "react";
import Header from "./UI/Header";
import SearchBar from "./UI/SearchBar";
import Tabs from "./UI/Tabs";
import Footer from "./UI/Footer";
import AffiliateOffers from "./UI/AffiliateOffers";
import CompletedOffers from "./UI/CompletedOffers";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./dashBoard.css";

const RetailerDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuBtnChange = () => {
    if (isOpen) {
      return "bx-menu-alt-right";
    } else {
      return "bx-menu";
    }
  };

  //Gets the retailer email from login Page
  const location = useLocation();
  //console.log(location.state.email)

  var productList = {};

  const para1 = "Completed Contracts";
  const para2 = "New Contracts";
  const para3 = "Edit Details";
  const redirect = "/editproduct";

  var NewTitle = "IPhone";
  var NewDate = "12 Jun 2022";
  var NewDescription = "IPhone 14, the New Top Class Phone";
  var NewDetail =
    "Apple is working on a IPhone 14 smartphone. This smartphone manufacturer company is working on a beast because it is more than a flagship device. The upcoming smartphone from Samsung will be a powerful handset of the year. The company will call it the Samsung Galaxy S22. The smartphone will be empowered by the Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) chipset, this chipset is used in flagship phones.";

  var CompletedTitle = "Pocco";
  var CompletedDate = "5 Dec 2015";
  var CompletdDescription = "Pocco F5, The new Budget smartphone";
  var CompletdDetail =
    "Xiaomi is working on a Redmi note11 smartphone. This smartphone manufacturer company is working on a beast because it is more than a flagship device. The upcoming smartphone from Samsung will be a powerful handset of the year. The company will call it the Samsung Galaxy S22. The smartphone will be empowered by the Qualcomm SM8450 Snapdragon 8 Gen 1 (4   nm) chipset, this chipset is used in flagship phones.";

  //calling Function to Fetch Retailer Data
  getRetailerData();

  //Get Retailer Data from DB
  async function getRetailerData() {
    try {
      const response = await fetch(
        process.env.API_ENDPOINT+"retailers/email/temp/" + location.state.email,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.message === "Email found") {
        Object.assign(productList, data.email.products);
        //console.log(productList);
      } else if (data.message === "Email not found") {
      } else {
        console.log("Unexpected response:", data);
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  // for (let [key, value] of Object.entries(productList)) {
  //     console.log(`${key}: ${value}`);
  //   }

  // console.log(productList);

  getProduct();

  async function getProduct() {
    try {
      const response = await fetch(
        process.env.API_ENDPOINT + "products/" + "647355c0785257a74c862e74",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data[0]._id);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <div className="flex flex-wrap bg-white w-full h-screen">
        <div className="w-2/12 bg-white rounded p-3 shadow-lg">
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="logo_details">
              <i className="bx bxl-audible icon"></i>
              <div className="logo_name">Code Effect</div>
              <i
                className={`bx ${menuBtnChange()}`}
                id="btn"
                onClick={toggleSidebar}
              ></i>
            </div>
            <ul className="nav-list">
              <li>
                <i className="bx bx-search"></i>
                <input type="text" placeholder="Search..." />
                <span className="tooltip">Search</span>
              </li>
              <li>
                <button>
                  <i className="bx bx-grid-alt"></i>
                  <span className="link_name">Welcome</span>
                </button>
                <span className="tooltip">Welcome</span>
              </li>
              <li>
                <button>
                  <i className="bx bx-user"></i>
                  <span className="link_name">Profile</span>
                </button>
                <span className="tooltip">Profile</span>
              </li>
              <li>
                <Link to="/product">
                  <i className="bx bx-chat"></i>
                  <span className="link_name">Add Product</span>
                </Link>
                <span className="tooltip">Add Product</span>
              </li>
              <li>
                <Link to="/addaffiliateoffer">
                  <i className="bx bx-pie-chart-alt-2"></i>
                  <span className="link_name">Add Affiliate</span>
                </Link>
                <span className="tooltip">Add Affiliate</span>
              </li>
              
              <li>
                <Link to="/changepassword">
                  <i className="bx bx-cog"></i>
                  <span className="link_name">Change Password</span>
                </Link>
                <span className="tooltip">Change Password</span>
              </li>
              <li className="profile">
                <div className="profile_details">
                  <img src="profile.jpeg" alt="profile image" />
                  <div className="profile_content">
                    <div className="name">Ameer Hamza</div>
                    <div className="designation">Retailer</div>
                  </div>
                </div>
                <i className="bx bx-log-out" id="log_out"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-9/12">
          <div className="p-4 text-gray-500">
            {/*Header imported from a component*/}

            <Header />
            {/*Search Bar imported from a component*/}

            <SearchBar />
            {/*Tabs imported from a component*/}
            <Tabs para1={para1} para2={para2} />

            {/*Contracts imported from a component*/}
            <AffiliateOffers
              NewTitle={NewTitle}
              NewDate={NewDate}
              NewDescription={NewDescription}
              NewDetail={NewDetail}
            />

            <CompletedOffers
              CompletedTitle={CompletedTitle}
              CompletedDate={CompletedDate}
              CompletdDescription={CompletdDescription}
              CompletdDetail={CompletdDetail}
              para3={para3}
              redirect={redirect}
            />

            {/*Footer imported from a component*/}

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default RetailerDashboard;
