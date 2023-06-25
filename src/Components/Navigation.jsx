import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-between ">
      {/* h-0 w-full */}
      
      <figure className="w-[20%] md:w-[13%]">
        <img src="/Images/Logo.png" alt="logo" className="md:p-4  w-full " />
      </figure>
      <ul className="flex justify-between py-6">
        <li className="p-1 md:p-4 md:m-2">
          <Link
            to="#"
            className=" bg-[#0504AA] text-white py-2 px-2 rounded">
           CONTACT
          </Link>
        </li>
        <li className="p-1 md:p-4 md:m-2">
          <Link
            to="/signup"
            className=" bg-[#0504AA] text-white py-2 px-2 rounded">
            GET STARTED
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
