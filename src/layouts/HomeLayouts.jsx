import React from "react";
import PropTypes from "prop-types";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/layout-Component/LeftAside";
import RightAside from "../Components/layout-Component/RightAside";
import { Outlet } from "react-router-dom";

const HomeLayouts = () => {
  return (
    <div className="w-10/12 mx-auto font-poppins">
      <Header>
        <Header></Header>
      </Header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="grid grid-cols-12 mt-16 gap-5">
        <aside className="text-center col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className=" col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className=" col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

HomeLayouts.propTypes = {};

export default HomeLayouts;
