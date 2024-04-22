import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/devices')
      .then((response) => {
        setDevices(response.data.data);
        setLoading(false);
      })
      .catch((error) =>{
        console.log(error);
        setLoading(false);
      });
    },[]);
    return(
    <div className="{ 'dark': isDark }">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 dark:text-white"> 
        <Sidebar />
       
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                {loading? (
                  <Spinner />
                ) : (
                  <>
                    <div className="w-full flex place-content-end text-right pb-2">
                      Nuevo Dispositivo
                      <Link to="/devices/create/" className="pl-2">
                        <MdOutlineAddBox className="text-2xl text-gray-500 hover:text-white" />
                      </Link>
                    </div>
                    <table className="w-full">
                      <thead>
                        <tr className="text-sm font-semibold tracking-wide text-left text-gray-400 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3">Nombre</th>
                        <th className="px-4 py-3">Oficina</th>
                        <th className="px-4 py-3">Departamento</th>
                        <th className="px-4 py-3">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {devices.sort((a, b) => a.name.localeCompare(b.name)).map((device, index) => (

                          <tr key={index} className=" font-semibold tracking-wide text-left text-gray-300 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <td className="px-4 py-2"><Link to={`/devices/details/${device._id}`}>{device.name}</Link></td>
                            <td className="px-4 py-2">{device.office}</td>
                            <td className="px-4 py-2">{device.department}</td>
                            <td className="px-4 py-2">
                              <div className="flex gap-x-4">
                                <Link to={`/devices/details/${device._id}`}>
                                  <BsInfoCircle className="text-2xl text-gray-500 hover:text-white" />
                                </Link>
                                <Link to={`/devices/edit/${device._id}`}>
                                  <AiOutlineEdit className="text-2xl text-gray-500 hover:text-white" />
                                </Link>
                                <Link to={`/devices/delete/${device._id}`}>
                                  <MdOutlineDelete className="text-2xl text-gray-500 hover:text-white" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )} 
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;