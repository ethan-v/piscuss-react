import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer/Footer"
import Header from "./Header/Header";
import Rightbar from "./Rightbar/Rightbar";
import Sidebar from "./Sidebar/Sidebar";


function FrontLayout() {
    return (
      <div>
        <Header/>
        <main>
            <div className="container-xl container-lg container-xs">
                <div className="row">
                    <div className="col col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <Sidebar/>
                    </div>
                    <div className="col col-lg-6 col-md-9 col-sm-12 col-xs-12">
                        <Outlet />
                    </div>
                    <div className="col col-lg-3 d-none d-lg-block">
                        <Rightbar/>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
      </div>
    );
  }

export default FrontLayout