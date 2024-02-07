import MenuSection from '../components/MenuSection';

const postresData = [
  {
    imgSrc: 'tiramisu-17-500x500.jpg',
    alt: 'Tiramisú',
    title: 'Tiramisú',
    description: 'Porción de Tiramisú con salsa de sabor a elección.',
    price: '$1.900',   
  },
  {
    imgSrc: 'whatsapp-image-2020-04-03-at-03.00.55-e1586451007998.jpeg',
    alt: 'Chocotorta',
    title: 'Chocotorta',
    description: 'Porción de chocotorta con salsa de sabor a elección.',
    price: '$1.600',   
  },
  {
      imgSrc: 'browniesdedoblechocolate.jpg',
      alt: 'Brownies de Chocolate',
      title: 'Brownies de Chocolate',
      description: '3 porciones de Brownies de Chocolates bañados con dulce de leche.',
      price: '$1.300',   
    },
    {
      imgSrc: 'flan-de-chocolate.jpg',
      alt: 'Flan de Chocolate',
      title: 'Flan de Chocolate',
      description: 'Porción de Flan casero con pedazos de chocolate encima.',
      price: '$1.000',   
    },

];

function Postres() {
  return <MenuSection title="Postres" products={postresData} />;
}

export default Postres;