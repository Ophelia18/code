import React from 'react';
import PropTypes from 'prop-types';

function Book({ img, name, auther }) {
   return (
      <div>
         <img src={img} alt='' />
         <h1>{name}</h1>
         <h4>{auther}</h4>
      </div>
   );
}

Book.propTypes = {
   name: PropTypes.string,
   auther: PropTypes.string,
   img: PropTypes.string,
};

export default Book;
