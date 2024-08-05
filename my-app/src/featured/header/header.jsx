import React from "react";
import "./header.scss";
import { TbBell } from "react-icons/tb";
import { MdPerson } from "react-icons/md";
import { FaSearch, FaCog } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon"></div>
        <span className="team-name">Team 1</span>
        <span className="status">Free</span>
      </div>
      <div className="search">
        <FaSearch />
        <input type="text" className="search-input" placeholder="xK" />
      </div>
      <div className="actions">
        <img
          className="img"
          src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/gb.webp"
          alt="Language"
        />
        <button className="icon-button">
          <TbBell />
          <span className="notification-count">
            <div>4</div>
          </span>
        </button>
        <button className="icon-button">
          <MdPerson />
        </button>

        <button className="icon-button">
          <FaCog />
        </button>
        <div className="profile">
          <img
            className="profile-pic"
            src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp"
            alt="Profile"
          />
          <div className="status-indicator"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
