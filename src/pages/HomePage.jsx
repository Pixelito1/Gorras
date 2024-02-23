import Product from "../components/Products";
import productos from "../mocks/products.json";
function HomePage() {
  return (
    <>
      <div className="flex flex-wrap justify-between p-8">
        {productos.map((producto, index) => (
          <Product
            className="w-1/3 mb-5"
            key={index}
            imageUrl={producto.imagen}
            nameObj={producto.nombre}
            priceObj={producto.precio}
          />
        ))}
      </div>
    </>
  );
}
export default HomePage;
