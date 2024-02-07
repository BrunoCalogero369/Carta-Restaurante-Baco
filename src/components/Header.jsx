import '../styles/global.css';
import PropTypes from 'prop-types';

function Header({ setActiveSection }) {
  const stylesHeader = {
    textAlign: 'center',
    padding: '10px 0',
    background: 'url("imagenes/1658302917_oku-restaurant-7.jpg") center/cover no-repeat',
    borderBottom: '2px solid red',
    fontSize: '36px',
    position: 'relative',
  };

  return (
    <header style={stylesHeader}>
      <h1 className="header-title">RESTAURANT → B.A.C.O</h1>
      <div className="subheader" id="subheader">
        <button className="subheader-button" onClick={() => setActiveSection('platos')}>Platos Principales</button>
        <button className="subheader-button" onClick={() => setActiveSection('bebidas')}>Bebidas</button>
        <button className="subheader-button" onClick={() => setActiveSection('entradas')}>Entradas</button>
        <button className="subheader-button" onClick={() => setActiveSection('postres')}>Postres</button>
      </div>
    </header>
  );
}

Header.propTypes = {
setActiveSection: PropTypes.func.isRequired,
};

export default Header;