import React, { useState } from "react";
import "./Sidebar.scss";
import { SiGoogleanalytics } from "react-icons/si";
import { FaShoppingBag, FaBriefcase } from "react-icons/fa";
import {
  MdSpeed,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineOrderedList } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineReceipt } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isJobMenuOpen, setIsJobMenuOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleJobMenu = () => setIsJobMenuOpen(!isJobMenuOpen);

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <MdOutlineKeyboardArrowLeft />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
      </div>
      <div>
        <img
          src="https://store-wp.mui.com/wp-content/uploads/2024/06/cropped-logo.png"
          alt="Logo"
        />
      </div>
      <div>
        <span className="overview">Overview</span>
      </div>
      <div className="menu">
        <div className="menu-item">
          <div className="icon">
            <MdSpeed />
          </div>
          <div className="text">App</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <FaShoppingBag />
          </div>
          <div className="text">Ecommerce</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <SiGoogleanalytics />
          </div>
          <div className="text">Analytics</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <BsBank />
          </div>
          <div className="text">Banking</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <FaRegFileLines />
          </div>
          <div className="text">File</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <TbDeviceDesktopAnalytics />
          </div>
          <div className="text">Course</div>
        </div>
        <div className="management">
          <span>Management</span>
        </div>
        <div className="menu-item">
          <div className="icon">
            <AiOutlineUser />
          </div>
          <div className="text">User</div>
          <div className="arrow-icon">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <RiProductHuntLine />
          </div>
          <div className="text">Product</div>
          <div className="arrow-icon">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <AiOutlineOrderedList />
          </div>
          <div className="text">Order</div>
          <div className="arrow-icon">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <MdOutlineReceipt />
          </div>
          <div className="text">Invoice</div>
          <div className="arrow-icon">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <BiNews />
          </div>
          <div className="text">Blog</div>
          <div className="arrow-icon">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="menu-item" onClick={toggleJobMenu}>
          <div className="icon">
            <FaBriefcase />
          </div>
          <div className="text">Job</div>
          <div className="arrow-icon">
            {isJobMenuOpen ? (
              <MdOutlineKeyboardArrowLeft />
            ) : (
              <MdOutlineKeyboardArrowRight />
            )}
          </div>
        </div>
        {isJobMenuOpen && (
          <div className="submenu">
            <Link to={"/list"} className="submenu-item">
              List
            </Link>
            <div className="submenu-item">Details</div>
            <Link to={"/create"} className="submenu-item">
              Create
            </Link>
            <div className="submenu-item">Edit</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
