function Print({ nombre, marca, categoria, genero, color, precio, imagen }) {
  return (
    <div className="flex items-center">
      <div className="bg-white max-w-[800px] h-max-1 pl-24 pr-10">
        <img src={imagen} />
      </div>
      <div>
        <p className="text-7xl font-bold">{nombre}</p>
        <p className="text-gray-500 text-4xl">{marca}</p>
        <p className="text-2xl">{categoria}</p>
        <p className="text-2xl">Genero: {genero}</p>
        <p className="text-2xl">Color: {color}</p>
        <p className="text-2xl">{precio}</p>
        <div className="flex justify-center py-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded tracking-wider items-center">
            <p className="px-8">Añadir al carrito</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Print;
