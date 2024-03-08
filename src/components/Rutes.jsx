import { Link } from "react-router-dom";
function Rutes({ page, setPage }) {
  const pagination = (page) => {
    setPage(page);
  };
  const pages = [
    { url: "man", title: "Hombre" },
    { url: "woman", title: "Mujer" },
    { url: "supp", title: "Soporte" },
  ];
  return (
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
  );
}
export default Rutes;
