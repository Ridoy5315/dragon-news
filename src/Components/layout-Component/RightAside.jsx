import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightAside = () => {
     return (
          <div className='space-y-10'>
               <SocialLogin></SocialLogin>
               <FindUs></FindUs>
          </div>
     );
};

RightAside.propTypes = {
     
};

export default RightAside;