import Product from "../components/Products";
import productos from "../mocks/products.json";
import Footer from "../components/Footer";
function WomanPage() {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-5 p-8">
        {productos
          .filter((producto) => producto.genero === "F")
          .map((producto, index) => (
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
    </div>
  );
}

export default WomanPage;
