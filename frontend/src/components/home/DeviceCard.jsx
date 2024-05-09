import { Link } from "react-router-dom";

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";


const DeviceCard = ({ devices }) => {
  return (
    <div className="grid sm:grid-cols-2 log:grid-cols-3 xl:grid-cols-4">
      {devices.map((item) => (
        <div key={item.id} className="border-2 border-gray-400 rounded-lg px-4 py-2 m-4 relative hover:shadow-lg">
          <div className="flex justify-center">
            <img src={item.image}  alt={item.name}/>
          </div>
          <div className="flex justify-center gap-x-2">
            <BiUserCircle className="text-sky-500 text-2xl" />
            <h2 className="my-1">{item.name}</h2>
          </div>
          <div className="flex justify-center gap-x-2">
            <BiUserCircle className="text-sky-500 text-2xl" />
            <h2 className="my-1">{item.office}</h2>
          </div>
          <div className="flex justify-center gap-x-2">
            <BiUserCircle className="text-sky-500 text-2xl" />
            <h2 className="my-1">{item.department}</h2>
          </div>
          <div className="flex justify-around items-center gap-x-2 mt-4 p-4">
            <Link to={`/devices/details/${item.id}`}><BsInfoCircle className="text-2xl text-green-300 hover:text-green-600" /></Link>
            <Link to={`/devices/edit/${item.id}`}><AiOutlineEdit className="text-2xl text-yellow-300 hover:text-yellow-600" /></Link>
            <Link to={`/devices/delete/${item.id}`}><MdOutlineDelete className="text-2xl text-red-300 hover:text-red-600" /></Link>
          </div>
        </div>
      ))}
    </div>
  )
};
export default DeviceCard;
