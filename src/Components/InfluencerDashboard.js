import React,{useState} from "react";
import SearchBar from "./UI/SearchBar";
import Header from "./UI/Header";
import Tabs from "./UI/Tabs";
import Footer from "./UI/Footer";
import AffiliateOffers from "./UI/AffiliateOffers";
import CompletedOffers from "./UI/CompletedOffers";
import {Link} from "react-router-dom";

const InfluencerDashBoard = () => {


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











  const para1='Completed';
  const para2='Affiliate Offers';
  const para3='Form Contract';
  

  var NewTitle="Samsung S22";
  var NewDate="12 Jun 2019";
  var NewDescription="Samsung S22 The Game Changer from Samsung";
  var NewDetail="Samsung is working on a Galaxy S22 smartphone. This smartphone manufacturer company is working on a beast because it is more than a flagship device. The upcoming smartphone from Samsung will be a powerful handset of the year. The company will call it the Samsung Galaxy S22. The smartphone will be empowered by the Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) chipset, this chipset is used in flagship phones."
  
  var CompletedTitle="Redmi Note 11";
  var CompletedDate="12 Jun 2022";
  var CompletdDescription="Redmi Note 11, The new Budget smartphone";
  var CompletdDetail="Xiaomi is working on a Redmi note11 smartphone. This smartphone manufacturer company is working on a beast because it is more than a flagship device. The upcoming smartphone from Samsung will be a powerful handset of the year. The company will call it the Samsung Galaxy S22. The smartphone will be empowered by the Qualcomm SM8450 Snapdragon 8 Gen 1 (4   nm) chipset, this chipset is used in flagship phones.";
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
                <button >
                  <i className="bx bx-grid-alt"></i>
                  <span className="link_name">Dashboard</span>
                </button>
                <span className="tooltip">Dashboard</span>
              </li>
              <li>
                <button>
                  <i className="bx bx-user"></i>
                  <span className="link_name">Profile</span>
                </button>
                <span className="tooltip">Profile</span>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bx-chat"></i>
                  <span className="link_name">Socials</span>
                </Link>
                <span className="tooltip">Socials</span>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bx-pie-chart-alt-2"></i>
                  <span className="link_name">Edit Profile</span>
                </Link>
                <span className="tooltip">Edit Profile</span>
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
                    <div className="name">Muhammad Haris</div>
                    <div className="designation">Influencer</div>
                  </div>
                </div>
                <i className="bx bx-log-out" id="log_out"></i>
              </li>
            </ul>
          </div>
        </div>

      <div className="w-9/12">
        <div className="p-4 text-gray-500">
          <Header />

          <SearchBar />

          <Tabs para1={para1} para2={para2}/>

          <AffiliateOffers NewTitle={NewTitle} NewDate={NewDate} NewDescription={NewDescription} 
                             NewDetail={NewDetail} />

          <CompletedOffers CompletedTitle={CompletedTitle} CompletedDate={CompletedDate} CompletdDescription={CompletdDescription} 
                             CompletdDetail={CompletdDetail} para3={para3}/>

          <Footer />
        </div>
      </div>
    </div>

    </>
  );
  
};

export default InfluencerDashBoard;
