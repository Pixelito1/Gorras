import { useParams } from "react-router-dom";
import productos from "../mocks/products.json";
import { useEffect, useState } from "react";
import Print from "../components/Print";
import Footer from "../components/Footer";

function InfoCap() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  console.log(product);
  useEffect(() => {
    setProduct(productos.find((objeto) => objeto.id == id));
  }, [id]);
  return (
    <div>
      <div>
        {product ? (
          <Print
            nombre={product.nombre}
            marca={product.marca}
            precio={product.precio}
            categoria={product.categoria}
            genero={product.genero}
            color={product.color}
            imagen={product.imagen}
          />
        ) : (
          <p>Cargando</p>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default InfoCap;
