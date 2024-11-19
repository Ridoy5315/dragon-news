import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaEye } from "react-icons/fa"; // Importing icons from react-icons
import { BsSave } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsByCategory = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
     
      {/* Content */}
      <div className="flex justify-between bg-gray-200 p-3 items-center rounded-lg">
          <div className="flex items-center mb-3 text-gray-600 text-sm">
            <img
              className="w-8 h-8 rounded-full mr-3"
              src={news.author.img}
              alt="Author"
            />
            <div>
              <p className="font-medium">{news.author.name}</p>
              <p className="text-xs">{news.author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-2">
               <BsSave></BsSave>
               <CiShare2></CiShare2>
          </div>
        </div>
      <div className="p-4">
        {/* Author and Date */}
        

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-2">{news.title}</h2>

        <img
        className="w-full h-48 object-cover rounded-md"
        src={news.thumbnail_url}
        alt="Thumbnail"
      />

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {news.details}{" "}
          <Link to={`/news/${news._id}`} className="text-blue-500 font-medium cursor-pointer">
            Read More
          </Link>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          {/* Rating */}
          <div className="flex items-center">
            <FaStar className="text-yellow-500 text-lg" />
            <span className="ml-1 text-gray-700 text-sm">
              {news.rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center text-gray-500 text-sm">
            <FaEye className="text-lg mr-1" />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsByCategory.propTypes = {};

export default NewsByCategory;

// author
// :
// {name: 'Jimmy Dane', published_date: '2022-08-24 17:27:34', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}
// category_id
// :
// "01"
// details
// :
// "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
// image_url
// :
// "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"
// others_info
// :
// {is_todays_pick: false, is_trending: true}
// rating
// :
// {number: 4.5, badge: 'Excellent'}
// thumbnail_url
// :
// "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png"
// title
// :
// "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet"
// total_view
// :
// 488
// _id
// :
// "0282e0e58a5c404fbd15261f11c2ab6a"
