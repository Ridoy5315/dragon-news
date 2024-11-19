import React from 'react';
import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
     return (
          <div className='bg-gray-100 mt-5 p-4 rounded-md flex gap-4 justify-center items-center'>
               <p className='bg-rose-600 text-white px-5 py-2 text-xl font-medium '>Latest</p>
               <Marquee pauseOnHover={true} className='space-x-5 text-lg font-semibold'>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, labore!</Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, labore!</Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, labore!</Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, labore!</Link>
               </Marquee>
          </div>
     );
};

LatestNews.propTypes = {
     
};

export default LatestNews;