import { useNavigate } from "react-router-dom";
function Product({ id, imagen, nombre, precio, marca }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="border-2 border-orange-600 p-1 w-[400px] relative">
        <img src={imagen} className="w-full" />
        <div
          className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 transition-opacity flex items-center justify-center"
          onClick={() => navigate(`/info/${id}`)}
        >
          <span className="text-white font-bold text-4xl">Ver información</span>
        </div>
      </div>
      <div className="flex justify-between gap-10 py-3 w-[400px]">
        <div className="text-2xl w-[50%]">
          <p className="line-clamp-1">{nombre}</p>
          <p className="text-gray-400 text-xl">{marca}</p>
        </div>
        <div className="h-full flex justify-center items-center">
          <button className="bg-red-400 hover:bg-red-600 p-2 rounded-lg text-xl h-10">
            $ {precio}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
