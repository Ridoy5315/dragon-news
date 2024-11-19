import React from "react";
import PropTypes from "prop-types";
import Header from "../Components/Header";
import RightAside from "../Components/layout-Component/RightAside";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = (props) => {
  const data = useLoaderData();
  const news = data.data[0];
  // const  news = data.data
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-10/12 mx-auto grid grid-cols-12 mt-16 gap-7">
        <section className="col-span-9">
          <p className="font-semibold text-2xl mb-4">Dragon News</p>
          <div className="border p-5 space-y-5 rounded-lg">
            <div>
              <img className="w-full" src={news.image_url} alt="" />
            </div>
            <p className="font-bold text-2xl">{news.title}</p>
            <p>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className="bg-[#D72050] text-white px-4 py-1">All news in this category</Link>
          </div>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

NewsDetails.propTypes = {};

export default NewsDetails;
