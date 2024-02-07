import MenuSection from '../components/MenuSection';

const bebidasData = [
  {
    imgSrc: '3080006_f.jpg',
    alt: 'Coca Cola',
    title: 'Coca Cola',
    description: 'Botella de Coca Cola sabor original 500ml.',
    price: '$690',   
  },
  {
    imgSrc: 'sprite.jpg',
    alt: 'Sprite',
    title: 'Sprite',
    description: 'Botella de Sprite sabor Limon 500ml.',
    price: '$690',   
  },
  {
    imgSrc: '521571.jpg',
    alt: 'Lata Keineken',
    title: 'Lata Heineken',
    description: 'Lata de cerveza rubia Heineken 473ml.',
    price: '$630',   
  },
  {
    imgSrc: 'malbec-mercado1-6d77e0a4100ce393cd16309533761685-1024-1024.jpg',
    alt: 'Vino Malbec del Mercado Santa Julia',
    title: 'Vino Malbec del Mercado Santa Julia',
    description: 'Botella de Vino Malbec del Mercado Santa Julia 750ml.',
    price: '$1.630',   
  },


];

function Bebidas() {
  return <MenuSection title="Bebidas" products={bebidasData} />;
}

export default Bebidas;