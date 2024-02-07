import MenuSection from '../components/MenuSection';

const entradasData = [
  {
    imgSrc: 'thumb04-e1617324738359.jpg',
    alt: 'Rabas',
    title: 'Rabas',
    description: 'Trozo de calamar rebozado y frito.',
    price: '$2.900',   
  },
  {
    imgSrc: 'papas-fritas-con-queso-cheddar-PG_PFCQCY30320002.jpg',
    alt: 'Papas con Cheddar',
    title: 'Papas con Cheddar',
    description: 'Papas con cheddar, verdeo y panceta.',
    price: '$2.300',   
  },
  {
    imgSrc: 'bastones-queso.jpg',
    alt: 'Bastones de Muzarella',
    title: 'Bastones de Muzarella',
    description: 'Plato con 6 unidades de bastones de Muzarella.',
    price: '$2.000',   
  },
  {
    imgSrc: 'nachos-queso-salsa-picante.jpg',
    alt: 'Nachos con Queso Cheddar y Salsa Picante',
    title: 'Nachos con Queso Cheddar y Salsa Picante',
    description: 'Porción de Nachos con un pote de Queso Cheddar y otro de Salsa.',
    price: '$1.800',   
  },

];

function Entradas() {
  return <MenuSection title="Entradas" products={entradasData} />;
}

export default Entradas;