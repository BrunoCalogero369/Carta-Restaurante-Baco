import MenuSection from '../components/MenuSection';
import productData from '../data/productData';

function Platos() {
  return <MenuSection title="Platos Principales" products={productData} />;
}

export default Platos;
