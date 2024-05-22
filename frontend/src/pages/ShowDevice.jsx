import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowDevice = () => {
  const [device, setDevice] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/devices/${id}`)
      .then((response) => {
        setDevice(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id])

  return (
    <div className="{ 'dark': isDark }">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 dark:text-white"> 
        <Sidebar />

        <div className="h-full ml-14 mb-10 md:ml-64 dark:bg-gray-800 ">
          <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <BackButton />
                
                {loading ? (
                  <Spinner />
                ): (
                  <div className="grid rounded-xl w-full p-4">
                    
                      <div className="flex w-full p-4">
                        <div className="pr-4">
                          <img className="w-3/4" src={device.image} alt={device.name} />
                        </div>
                        <div className="flex flex-col justify-around">
                          <div>
                            <span className="text-xl mr-4 text-gray-300">Nombre:</span>
                            <span className="text-xl mr-4 text-gray-300">{device.name}</span>
                          </div>
                          <div>
                            <span className="text-xl mr-4 text-gray-300">Departamento:</span>
                            <span className="text-xl mr-4 text-gray-300">{device.department}</span>
                          </div>
                          <div>
                            <span className="text-xl mr-4 text-gray-300">Oficina:</span>
                            <span className="text-xl mr-4 text-gray-300">{device.office}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <table className="w-full">
                          <thead>
                            <tr className="text-sm font-semibold tracking-wide text-left text-gray-400 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th className="px-4 py-3">Dispositivo</th>
                            <th className="px-4 py-3">Marca</th>
                            <th className="px-4 py-3">Modelo</th>
                            <th className="px-4 py-3">Serial</th>
                            <th className="px-4 py-3">Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                          {device && Array.isArray(device.devices) && device.devices.map((device, index) => (
                            <tr key={index} className=" font-semibold tracking-wide text-left text-gray-300 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                              <td className="px-4 py-2">{device.device}</td>
                              <td className="px-4 py-2">{device.make}</td>
                              <td className="px-4 py-2">{device.model}</td>
                              <td className="px-4 py-2">{device.serial}</td>
                              <td className="px-4 py-2">{device.state}</td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                  </div>
                )}
              </div>
            </div>              
          </div>
         </div>
      </div>
    </div>      
  )
}

export default ShowDevice;