import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
//import { CiGrid41 } from "react-icons/ci";
//import { FaList } from "react-icons/fa";

const Phones = () =>{
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/phones/")
      .then((response) => {
        setPhones(response.data);
        //console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return(
  <div className="{ 'dark': isDark }">
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 dark:text-white">
      <Sidebar />
      <div className="h-full ml-14 mb-10 md:ml-64">
        <div className="mt-4 mx-4">
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
            {loading ? (<Spinner />) : (
            <table className="w-full">
              <thead>
                <tr className="text-sm font-semibold tracking-wide text-left text-gray-400 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Marca</th>
                  <th className="px-4 py-3">Numero</th>
                  <th className="px-4 py-3">Departamento</th>
                  <th className="px-4 py-3">Oficina</th>
                  <th className="px-4 py-3">Interno</th>
                  <th className="px-4 py-3">Serial</th>
                  <th className="px-4 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {phones
                  .map((phone, index) => (
                    <tr
                      key={index}
                      className=" font-semibold tracking-wide text-left text-gray-300 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                    >
                      <td className="px-4 py-2">{phone.make}</td>
                      <td className="px-4 py-2">{phone.number}</td>
                      <td className="px-4 py-2">{phone.department}</td>
                      <td className="px-4 py-2">{phone.location}</td>
                      <td className="px-4 py-2">{phone.ext}</td>
                      <td className="px-4 py-2">{phone.serial}</td>
                      <td className="px-4 py-2">
                        <div className="flex gap-x-4">
                          <Link to={`/phones/create/${phone._id}`}>
                            <BsInfoCircle className="text-2xl text-green-600 hover:text-green-300" />
                          </Link>
                          <Link to={`/phones/edit/${phone._id}`}>
                            <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-300" />
                          </Link>
                          <Link to={`/phones/delete/${phone._id}`}>
                            <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-300" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Phones;
