import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="relative bg-black pt-10 pb-2">
        <div className="absolute top-20 left-0 right-0 border-t-2 border-b-2 border-white"></div>
        <div className="flex justify-center relative">
          <div className="inline-flex text-white gap-10">
            <FaFacebookSquare size={40} />
            <FaInstagram size={40} />
            <FaYoutube size={40} />
            <FaTwitterSquare size={40} />
            <FaEnvelope size={40} />
          </div>
          <div className="absolute top-10 left-[700px] right-[700px] border-t-2 border-b-2 border-black"></div>
        </div>
        <div className="flex justify-center text-white pt-10">
          <div>
            <p className="text-6xl text-white ">GORRAS A MIL</p>
            <p className="text-center py-2">
              &copy; 2024 GORRAS A MIL. Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
