import { useState } from 'react'
import BackButton  from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import Sidebar from '../components/Sidebar.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateDevice = () => {
  
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setImage] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);
  const navigate = useNavigate();
  const handleSaveDevice = () => {
    const data = {
      name,
      office,
      department,
      number,
      devices,
    };
    setLoading(true);
    axios
    .post('http://localhost:5555/devices', data)
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
        state: "",
        password: "",
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

  const offices = [
    {value: 'Puerto Madero', label: 'Puerto Madero'},
    {value: 'San Martin', label: 'San Martin'},
    {value: 'Mar del Plata', label: 'Mar del Plata'},
    {value: 'Rosario', label: 'Rosario'},
    {value: 'Mendoza', label: 'Mendoza'},
    {value: 'Posadas', label: 'Posadas'},
  ];

  const departments = [
    {value: 'RRHH', label: 'RRHH'},
    {value: 'Asistencias', label: 'Asistencias'},
    {value: 'Administracion', label: 'Administracion'},
    {value: 'Emisiones', label: 'Emisiones'},
    {value: 'Comerciales', label: 'Comerciales'},
    {value: 'IT', label: 'IT'},
    {value: 'Marketing', label: 'Marketing'},
  ];
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
                Crear Dispositivo
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Nombre</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" />
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Oficina</label>
                <select value={office} onChange={(e) => setOffice(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl">
                  {offices.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>  
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Departamento</label>
                <select value={department} onChange={(e) => setDepartment(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" >
                  {departments.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select> 
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Numero</label>
                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" />
              </div>
              <div className="my-4">
                <label className="text-xl mr-4 text-sky-500">Imagen</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" placeholder="/img/img.webp" />
              </div>
              {devices.map((device, index) => (
                <div key={index} className="flex">
                  <div className="flex w-full place-content-center">
                    <div className="p-2 my-2 w-1/2">
                      <label className="text-xl mr-4 text-sky-500">Dispositivo</label>
                      <input type="text" placeholder="Dispositivo" value={device.device} onChange={(e) => handleDeviceChange(index, "device", e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" />
                    </div>
                    <div className="p-2 my-2 w-1/2">
                      <label className="text-xl mr-4 text-sky-500">Modelo</label>
                      <input type="text" placeholder="Modelo" value={device.model} onChange={(e) => handleDeviceChange(index, "model", e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl"/>
                    </div>
                    <div className="p-2 my-2 w-1/2">
                      <label className="text-xl mr-4 text-sky-500">Marca</label>
                      <input type="text" placeholder="Marca" value={device.make} onChange={(e) => handleDeviceChange(index, "make", e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl"/>
                    </div>
                    <div className="p-2 my-2 w-1/2">
                      <label className="text-xl mr-4 text-sky-500">Serial</label>
                      <input type="text" placeholder="Serial" value={device.serial} onChange={(e) => handleDeviceChange(index, "serial", e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl"/>
                    </div>
                  </div>
                  <div className="flex w-full place-content-center">
                    <div className="p-2 my-2 w-1/2">
                      <label className="text-xl mr-4 text-sky-500">Color</label>
                      <input type="text" placeholder="Color" value={device.color} onChange={(e) => handleDeviceChange(index, "color", e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl"/>
                    </div>
                    <div className="p-2 my-2 w-1/2">
                      <label className="text-xl mr-4 text-sky-500">Estado</label>
                      <input type="text" placeholder="Estado" value={device.state} onChange={(e) => handleDeviceChange(index, "state", e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl"/>
                    </div>
                    <div className="p-2 my-2 w-1/2">
                      <label className="text-xl mr-4 text-sky-500">Contraseña</label>
                      <input type="text" placeholder="Contraseña" value={device.password} onChange={(e) => handleDeviceChange(index, "password", e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl"/>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex flex place-content-center">
                <button className="p-2 bg-green-500 mt-2 rounded text-white mr-2" onClick={handleAddDevice}>
                  Agregar Dispositivo
                </button>
                <button className="p-2 bg-sky-500 mt-2 rounded text-white" onClick={handleSaveDevice}>
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

export default CreateDevice