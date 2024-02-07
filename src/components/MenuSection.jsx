import Product from './Product';
import PropTypes from 'prop-types';

function MenuSection({ title, products, isActive }) {
  return (
    <div className={`section ${isActive ? 'active' : ''}`} id={`${title.toLowerCase()}-section`} style={{ display: isActive ? 'block' : 'none' }}>
      {/*<h2>{title}</h2>*/}
      {isActive && (
        <div>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}

MenuSection.propTypes = {
title: PropTypes.string.isRequired,
products: PropTypes.arrayOf(PropTypes.object).isRequired,
isActive: PropTypes.bool.isRequired,
};

export default MenuSection;