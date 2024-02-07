import MenuSection from '../components/MenuSection';

const platosData = [
  {
    imgSrc: 'LomoAltoBolixe.jpg',
    alt: 'Ojo de Bife',
    title: 'Ojo de Bife',
    description: '390gr de Carne, punto de cocción a elección.',
    price: '$3.900',   
  },
  {
    imgSrc: 'sorrentinos-rellenos-de-jamon-y-queso-con-salsa-marinara.jpg',
    alt: 'Sorrentinos de Jamon y Queso',
    title: 'Sorrentinos de Jamon y Queso',
    description: 'Plato con 6 unidades y salsa a elección.',
    price: '$2.900',   
  },
  {
    imgSrc: 'milanesa-napo.jpg',
    alt: 'Milanesa Napolitana',
    title: 'Milanesa Napolitana',
    description: 'Plato de Milanesa de carne Napolitana.',
    price: '$2.600',   
  },

];

function Platos() {
  return <MenuSection title="Platos Principales" products={platosData} />;
}

export default Platos;