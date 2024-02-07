import { useState } from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import productData from './data/productData';
import './styles/global.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('platos');
  const [platosIndex, setPlatosIndex] = useState(0);
  const [bebidasIndex, setBebidasIndex] = useState(0);
  const [entradasIndex, setEntradasIndex] = useState(0);
  const [postresIndex, setPostresIndex] = useState(0);

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  const handleSlide = (selectedIndex, section) => {
    switch (section) {
      case 'platos':
        setPlatosIndex(selectedIndex);
        break;
      case 'bebidas':
        setBebidasIndex(selectedIndex);
        break;
      case 'entradas':
        setEntradasIndex(selectedIndex);
        break;
      case 'postres':
        setPostresIndex(selectedIndex);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header setActiveSection={handleSetActiveSection} />

      {activeSection === 'platos' && (
        <Carousel interval={null} activeIndex={platosIndex} onSelect={(index) => handleSlide(index, 'platos')}>
          {productData.platos.map((product) => (
            <Carousel.Item key={product.id}>
              <MenuSection title={product.title} products={[product]} isActive={activeSection === 'platos'} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      {activeSection === 'bebidas' && (
        <Carousel interval={null} activeIndex={bebidasIndex} onSelect={(index) => handleSlide(index, 'bebidas')}>
          {productData.bebidas.map((product) => (
            <Carousel.Item key={product.id}>
              <MenuSection title={product.title} products={[product]} isActive={activeSection === 'bebidas'} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      {activeSection === 'entradas' && (
        <Carousel interval={null} activeIndex={entradasIndex} onSelect={(index) => handleSlide(index, 'entradas')}>
          {productData.entradas.map((product) => (
            <Carousel.Item key={product.id}>
              <MenuSection title={product.title} products={[product]} isActive={activeSection === 'entradas'} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      {activeSection === 'postres' && (
        <Carousel interval={null} activeIndex={postresIndex} onSelect={(index) => handleSlide(index, 'postres')}>
          {productData.postres.map((product) => (
            <Carousel.Item key={product.id}>
              <MenuSection title={product.title} products={[product]} isActive={activeSection === 'postres'} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default App;
