import React from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import NewsByCategory from "./NewsByCategory";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      <p className="text-2xl font-semibold">Dragon News Home</p>
      <div className="grid gap-6">
        {news.map((singleNews) => (
          <NewsByCategory
            key={singleNews.category_id}
            news={singleNews}
          ></NewsByCategory>
        ))}
      </div>
    </div>
  );
};

CategoryNews.propTypes = {};

export default CategoryNews;
