function Product({ imageUrl, nameObj, priceObj }) {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-300 w-[400px] ">
        <img src={imageUrl} />
      </div>
      <ul className="flex justify-normal gap-10 p-3">
        <li className="p-2 text-2xl">
          <p>{nameObj}</p>
        </li>
        <li>
          <button className="bg-red-400 p-2 rounded-lg text-xl">
            $ {priceObj}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Product;
