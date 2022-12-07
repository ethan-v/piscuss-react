import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer/Footer"
import Header from "./Header/Header";


function FrontLayout() {
    return (
      <div>
        <Header/>
        <main>
            <div className="leftbar">
                Left Bar
            </div>
            <div className="content">
                <Outlet />
            </div>
            <div className="rightbar">
                Right Bar
            </div>
        </main>
        <Footer/>
      </div>
    );
  }

export default FrontLayout