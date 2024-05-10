import { HiOutlineDesktopComputer, HiOutlineHome, HiOutlinePrinter, HiOutlineColorSwatch } from "react-icons/hi";
import { IoIosLaptop } from "react-icons/io";
import { RiCellphoneFill } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import logo from '../img/logo.png';


const Sidebar = () => {
  return (
    <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col flex-grow">
        <img src={logo} alt="Logo Avril" />
        <ul className="flex flex-col py-4 space-y-1">
          <li>
          <a href="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                  <HiOutlineHome />
              </span>
              <span className="ml-2 tracking-wide truncate">Inicio</span>
            </a>
          </li>
          <li>
            <a href="/phones" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                  <BsTelephone />
              </span>
              <span className="ml-2 tracking-wide truncate">Telefonos IP</span>
            </a>
          </li>
          <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                  <HiOutlinePrinter />
              </span>
              <span className="ml-2 tracking-wide truncate">Impresoras</span>
            </a>
          </li>
          <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                  <HiOutlineColorSwatch  />
              </span>
              <span className="ml-2 tracking-wide truncate">Miscelaneos</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
