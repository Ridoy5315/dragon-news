import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
     return (
          <div className='flex flex-col justify-center items-center mt-10 gap-3' >
               <img className='' src={logo} alt="" />
               <p className='text-gray-500'>Journalism Without Fear or Favour</p>
               <p>{moment().format("dddd, MMMM Do YYYY")}</p>
          </div>
     );
};

Header.propTypes = {
     
};

export default Header;