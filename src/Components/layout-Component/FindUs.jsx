import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <p className="text-xl font-semibold">Find Us On</p>
      <div className="join flex join-vertical mt-4">
        <button className="btn justify-start bg-gray-100 join-item text-lg"> <FaFacebook></FaFacebook> Facebook</button>
        <button className="btn justify-start bg-gray-100  join-item text-lg"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn justify-start bg-gray-100  join-item text-lg"><FaInstagram></FaInstagram>Instagram</button>
      </div>
    </div>
  );
};

FindUs.propTypes = {};

export default FindUs;
