import { useState, useEffect } from "react";
import { data } from "../mocks/data";

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? data.length - 1 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      setCurrentIndex((curr) => (isLastSlide ? 0 : curr + 1));
    }
  };

  return (
    <div className="w-500 h-280 mx-auto pt-5">
      <div className="relative h-full">
        <div
          onClick={() => scrollToImage("prev")}
          className="select-none p-36 absolute top-1/2 transform -translate-y-1/2 left-0 text-red-900 text-5xl font-bold z-10 cursor-pointer"
        >
          &#10092;
        </div>
        <div
          onClick={() => scrollToImage("next")}
          className="select-none p-36 absolute top-1/2 transform -translate-y-1/2 right-0 text-red-900 text-5xl font-bold z-10 cursor-pointer"
        >
          &#10093;
        </div>
        <div className="w-full h-full border-5 border-gray-300 overflow-hidden">
          <ul>
            <li key={data[currentIndex].id}>
              <img
                src={data[currentIndex].imgUrl}
                alt={data[currentIndex].alt}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
