import Product from "../components/Products";
import productos from "../mocks/products.json";
function WomanPage() {
  return (
    <div className="flex gap-2">
      {productos
        .filter((producto) => producto.genero === "F")
        .map((producto, index) => (
          <Product
            key={index}
            imageUrl={producto.imagen}
            nameObj={producto.nombre}
          />
        ))}
    </div>
  );
}

export default WomanPage;
