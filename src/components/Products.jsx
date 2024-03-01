function Product({ imageUrl, nameObj, priceObj, marcaObj }) {
  return (
    <div className="flex flex-col">
      <div className="border-2 border-orange-600 p-4 w-[400px] relative">
        <img src={imageUrl} className="w-full" />
        <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 transition-opacity flex items-center justify-center">
          <span className="text-white font-bold text-4xl">Ver información</span>
        </div>
      </div>
      <div className="flex justify-between gap-10 py-3 w-[400px]">
        <div className="text-2xl w-[50%]">
          <p className="line-clamp-1">{nameObj}</p>
          <p className="text-gray-400 text-xl">{marcaObj}</p>
        </div>
        <div className="h-full flex justify-center items-center">
          <button className="bg-red-400 p-2 rounded-lg text-xl h-10">
            $ {priceObj}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
