import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
   constructor() {
      super();
   }
   render() {
      return (
         <div>
            <img src={this.props.img} alt="" />
            <h1>{this.props.name}</h1>
            <h4>{this.props.auther}</h4>
         </div>
      );
   }
}

Book.propTypes = {
   name: PropTypes.string,
   auther: PropTypes.string,
   img: PropTypes.string,
};

export default Book;