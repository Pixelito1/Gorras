import Product from "../components/Products";
import productos from "../mocks/products.json";
import { useState } from "react";

function Section({ filter }) {
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState(null);

  const handleBrandClick = (brand) => {
    setBrand(brand);
  };

  const handleColorClick = (color) => {
    setColor(color);
  };

  const filteredProducts = productos.filter((producto) => {
    if (filter && producto.genero !== filter) {
      return false;
    }
    if (brand && producto.marca !== brand) {
      return false;
    }
    if (color && producto.color !== color) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex">
      <div className="px-3">
        <p className="font-questrial text-2xl pt-8 text-center font-bold">
          OPCIONES
        </p>
        <div className="py-3">
          <select
            className="bg-orange-400 px-4 py-2 w-full text-white rounded"
            onChange={(e) => handleBrandClick(e.target.value)}
          >
            <option value="">Marcas</option>
            <option value="New Era">New Era</option>
            <option value="Fox">Fox</option>
            <option value="Adidas">Adidas</option>
          </select>
        </div>
        <div className="py-3">
          <select
            className="bg-orange-400 px-4 py-2 w-full text-white rounded"
            onChange={(e) => handleColorClick(e.target.value)}
          >
            <option value="">Colores</option>
            <option value="Blanco">Blanco</option>
            <option value="Verde">Verde</option>
            <option value="Rosado">Rosado</option>
            <option value="Negro">Negro</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-start gap-6 py-8">
        {filteredProducts.map((producto, index) => (
          <Product
            id={producto.id}
            className="w-1/5 mb-5"
            key={index}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            marca={producto.marca}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
