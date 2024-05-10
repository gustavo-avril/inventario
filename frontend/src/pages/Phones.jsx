import { useState, useEffect } from "react";
import axios from "axios";
//import Spinner from "../components/Spinner";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
//import { CiGrid41 } from "react-icons/ci";
//import { FaList } from "react-icons/fa";

const Phones = () =>{
  const [phones, setPhones] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [showType, setShowType] = useState("table");
  useEffect(() => {
    //setLoading(true);
    axios
      .get("http://localhost:5555/phones/")
      .then((response) => {
        console.log(response.data.data);
        setPhones(response.data.data);
        //setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
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
              <>
                <div className="w-full flex justify-between text-right pb-2">
                  <div className="flex">
                    Nuevo Dispositivo
                    <Link to="/devices/create/" className="pl-2">
                      <MdOutlineAddBox className="text-2xl text-gray-500 hover:text-white" />
                    </Link>
                  </div>
                  {/* <div>
                    <button className="pr-2 text-2xl text-gray-500 hover:text-white " onClick={() => setShowType("table")}>
                      <FaList />
                    </button>
                    <button className="text-2xl text-gray-500 hover:text-white" onClick={() => setShowType("card")}>
                      <CiGrid41 />
                    </button>
                  </div> */}
                </div>
              </>
                {phones
                  .map((phone) => (
                    <>
                      <div>{phone._id} </div>
                      <div>{phone.make} </div>
                    </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Phones;
