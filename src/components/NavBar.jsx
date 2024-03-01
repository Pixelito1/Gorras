import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

function NavBar() {
  const [page, setPage] = useState("/");

  const pagination = (page) => {
    setPage(page);
  };
  const pages = [
    { url: "man", title: "Hombre" },
    { url: "woman", title: "Mujer" },
    { url: "supp", title: "Soporte" },
  ];
  const icons = ["shopping_cart", "person"];

  return (
    <>
      <header className="bg-red-500 p-6">
        <div className="flex justify-between">
          <p onClick={() => pagination("/")} className="text-6xl text-red-200">
            <Link to={"/"}>GORRAS A MIL</Link>
          </p>
          <div className="flex gap-80 items-end text-2xl text-white">
            <ul className="flex gap-10 items-end">
              {pages.map((root, index) => (
                <li key={index}>
                  <Link to={`/${root.url}`}>
                    <p
                      className={
                        page === root.url
                          ? "border-b-2 border-white font-bold gap-10"
                          : ""
                      }
                      onClick={() => pagination(root.url)}
                    >
                      {root.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-10 items-end">
              {icons.map((icon, index) => (
                <li key={index} className="-mb-2">
                  {<Icon icon={icon} />}
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
