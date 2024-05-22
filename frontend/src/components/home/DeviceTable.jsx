import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const DeviceTable = ({ devices }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-sm font-semibold tracking-wide text-left text-gray-400 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <th className="px-4 py-3">Nombre</th>
          <th className="px-4 py-3">Oficina</th>
          <th className="px-4 py-3">Departamento</th>
          <th className="px-4 py-3">Numero</th>
          <th className="px-4 py-3">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {devices
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((device, index) => (
            <tr
              key={index}
              className=" font-semibold tracking-wide text-left text-gray-300 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <td className="px-4 py-2">
                <Link to={`/devices/details/${device._id}`}>{device.name}</Link>
              </td>
              <td className="px-4 py-2">{device.office}</td>
              <td className="px-4 py-2">{device.department}</td>
              <td className="px-4 py-2">{device.number}</td>
              <td className="px-4 py-2">
                <div className="flex gap-x-4">
                  <Link to={`/devices/details/${device._id}`}>
                    <BsInfoCircle className="text-2xl text-green-600 hover:text-green-300" />
                  </Link>
                  <Link to={`/devices/edit/${device._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-300" />
                  </Link>
                  <Link to={`/devices/delete/${device._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-300" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DeviceTable;
