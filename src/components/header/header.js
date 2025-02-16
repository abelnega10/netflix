import React from 'react'
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
const header = () => {
  return (
    <>
      <header className="header">
        {/* Netflix Logo */}
        <div className="logo">
          NET<span>FLIX</span>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">My List</a>

          <a>
            <SearchIcon />
          </a>
        </nav>

        {/* Sign In Button */}
        <button className="sign-in">Sign In</button>
      </header>
    </>
  );
}

export default header