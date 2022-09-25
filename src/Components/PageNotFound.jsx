import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNotFound.css";
const PageNotFound = () => {
  return (
    <div className="main-wrapper">
      <div className="error">
        <p className="error__num">4</p>
        <div className="error__moon"></div>
        <p className="error__num">4</p>
      </div>
      <div className="house">
        <div className="house__right">
          <div className="house__window"></div>
        </div>
        <div className="house__center">
          <div className="house__window"></div>
          <div className="house__window"></div>
        </div>
        <div className="house__left">
          <div className="house__window"></div>
          <div className="house__window"></div>
        </div>
        <div className="house__mini">
          <div className="house__window"></div>
          <div className="bridge"></div>
        </div>
        <div className="house__bottom">
          <div className="house__window"></div>
        </div>
      </div>
      <div className="graves">
        <div className="grave"></div>
        <div className="grave grave--mini"></div>
        <div className="grave grave--mini"></div>
      </div>
      <div className="bat bat--left">
        <div className="bat__right-wing"></div>
        <div className="bat__left-wing"></div>
      </div>
      <div className="bat bat--right">
        <div className="bat__right-wing"></div>
        <div className="bat__left-wing"></div>
      </div>
      <div className="ground-wrapper"></div>
      <div className="button-container">
        <p>Sorry! That page dosen't seem to exist</p>
        <NavLink className="button button--back" to="/">
          Go Back
          <div className="ghost">
            <div className="ghost__hand"></div>
            <div className="ghost__face"></div>
            <div className="ghost__tail"></div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
