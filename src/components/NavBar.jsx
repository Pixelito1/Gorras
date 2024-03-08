import { Link } from "react-router-dom";
import Icon from "./Icon";
import Rutes from "./Rutes";
import { useState } from "react";

function NavBar() {
  const icons = [
    { title: "shopping_cart", url: "/" },
    { title: "person", url: "/register" },
  ];
  const [page, setPage] = useState("/");

  return (
    <>
      <header className="bg-red-500 p-6">
        <div className="flex justify-between">
          <p onClick={() => setPage(null)} className="text-6xl text-red-200">
            <Link to={"/"}>GORRAS A MIL</Link>
          </p>
          <div className="flex gap-80 items-end text-2xl text-white">
            <Rutes page={page} setPage={setPage} />
            <ul className="flex gap-10 items-end">
              {icons.map((icon, index) => (
                <li key={index} className="-mb-2">
                  {
                    <Link to={icon.url}>
                      <Icon icon={icon.title} />
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </header>
    </>
  );
}

export default NavBar;
