import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import DeviceTable from "../components/home/DeviceTable";
import DeviceCard from "../components/home/DeviceCard";

const Home = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/devices")
      .then((response) => {
        setDevices(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="{ 'dark': isDark }">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 dark:text-white">
        <Sidebar />
        <div className="flex justify-center items-center gap-x-4">
          <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType("table")}>
            Tabla
          </button>
          <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType("card")}>
            Tarjetas
          </button>
        </div>
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <>
                  <div className="w-full flex place-content-end text-right pb-2">
                    Nuevo Dispositivo
                    <Link to="/devices/create/" className="pl-2">
                      <MdOutlineAddBox className="text-2xl text-gray-500 hover:text-white" />
                    </Link>
                  </div>
                </>
                {loading ? (
                  <Spinner />
                ) : showType === "table" ? (
                  <DeviceTable devices={devices} />
                ) : (
                  <DeviceCard devices={devices} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
