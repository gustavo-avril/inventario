import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton  from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import Sidebar from '../components/Sidebar.jsx';
import axios from 'axios';

const EditDevice = () => {
  
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setImage] = useState('');
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/devices/${id}`)
    .then((response) =>{
      setName(response.data.name);
      setOffice(response.data.office);
      setDepartment(response.data.department);
      setImage(response.data.image);
      setDevices(response.data.devices);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert('Ocurrio un error');
      console.log(error);
    });
  }, [id])
  
  const handleEditDevice = () => {
    const data = {
      name,
      office,
      department,
      image,
      devices,
    };
    setLoading(true);
    axios
    .put(`http://localhost:5555/devices/${id}`, data)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert('Ocurrio un Error inesperado'); 
      console.log(error);
    })
  };

  const handleAddDevice = () => {
    setDevices((prevDevices) => [
      ...prevDevices,
      {
        device: "",
        model: "",
        make: "",
        serial: "",
        color: "",
        state: "En Uso",
        password: "1234",
      },
    ]);
  };

  const handleDeviceChange = (index, field, value) => {
    setDevices((prevDevices) =>
      prevDevices.map((device, i) =>
        i === index ? { ...device, [field]: value } : device
      )
    );
  };

  return (
    <div className="{ 'dark': isDark }">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 dark:text-white"> 
        <Sidebar />

        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <BackButton />
                {loading? <Spinner /> : '' }
              </div>
              <div className="w-full flex place-content-center pb-2">
                Editar Dispositivo
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Nombre</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500" />
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Oficina</label>
                <input type="text" value={office} onChange={(e) => setOffice(e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500" />
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Departamento</label>
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500" />
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Imagen</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500" />
              </div>
              {devices.map((device, index) => (
                <div key={index} className="flex">
                  <div >
                    <div className="my-4">
                      <label className="text-xl mr-4 text-sky-500">Dispositivo</label>
                      <input type="text" placeholder="Dispositivo" value={device.device} onChange={(e) => handleDeviceChange(index, "device", e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500" />
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-sky-500">Modelo</label>
                      <input type="text" placeholder="Modelo" value={device.model} onChange={(e) => handleDeviceChange(index, "model", e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500"/>
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-sky-500">Marca</label>
                      <input type="text" placeholder="Marca" value={device.make} onChange={(e) => handleDeviceChange(index, "make", e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500"/>
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-sky-500">Serial</label>
                      <input type="text" placeholder="Serial" value={device.serial} onChange={(e) => handleDeviceChange(index, "serial", e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500"/>
                    </div>
                  </div>
                  <div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-sky-500">Color</label>
                      <input type="text" placeholder="Color" value={device.color} onChange={(e) => handleDeviceChange(index, "color", e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500"/>
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-sky-500">Estado</label>
                      <input type="text" placeholder="Estado" value={device.state} onChange={(e) => handleDeviceChange(index, "state", e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500"/>
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-sky-500">Contraseña</label>
                      <input type="text" placeholder="Contraseña" value={device.password} onChange={(e) => handleDeviceChange(index, "password", e.target.value)} className="border-2 border-gray-500 px-4 py-4 w-full text-sky-500"/>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex flex place-content-center">
                <button className="p-2 bg-green-500 mt-2 rounded text-white mr-2" onClick={handleAddDevice}>
                  Editar Dispositivo
                </button>
                <button className="p-2 bg-sky-500 mt-2 rounded text-white" onClick={handleEditDevice}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditDevice