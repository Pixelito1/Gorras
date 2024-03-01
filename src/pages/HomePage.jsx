import Product from "../components/Products";
import productos from "../mocks/products.json";
import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <>
      <div>
        <Carrousel />
      </div>
      <div className="flex flex-wrap justify-between gap-5 p-8">
        {productos.map((producto, index) => (
          <Product
            className="w-1/5 mb-5"
            key={index}
            imageUrl={producto.imagen}
            nameObj={producto.nombre}
            priceObj={producto.precio}
            marcaObj={producto.marca}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
