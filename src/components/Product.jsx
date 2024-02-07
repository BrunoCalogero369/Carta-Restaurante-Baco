import PropTypes from 'prop-types';

function Product({ id, imgSrc, alt, title, description,}) {
    return (
      <div className="product" key={id}>
        <img src={imgSrc} alt={alt}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

  Product.propTypes = {
id: PropTypes.number.isRequired,
imgSrc: PropTypes.string.isRequired,
alt: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
  };
  
  export default Product;