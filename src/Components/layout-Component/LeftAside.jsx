import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LeftAside = props => {

     const [categories, setCategories] = useState([]);

     useEffect(() => {
          fetch('https://openapi.programming-hero.com/api/news/categories')
          .then(res => res.json())
          .then(data => setCategories(data.data.news_category))
     },[])

     return (
          <div>
               <p>All Caterogy ({categories.length})</p>
               <div className='flex flex-col mt-5 gap-2 '>
                    {
                         categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category.category_id} className='btn '>{category.category_name}</NavLink>)
                    }
               </div>
          </div>
     );
};

LeftAside.propTypes = {
     
};

export default LeftAside;