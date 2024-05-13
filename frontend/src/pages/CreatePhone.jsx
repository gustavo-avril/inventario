import { useState } from 'react'
import BackButton  from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import Sidebar from '../components/Sidebar.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePhone = () => {
  
  const [make, setMake] = useState('');
  const [number, setNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [serial, setSerial] = useState('');
  const [ext, setExt] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSavePhone = () => {
    const data = {
      make,
      number,
      department,
      location,
      serial,
      ext,
    };
    setLoading(true);
    axios
    .post('http://localhost:5555/phones', data)
    .then(() => {
      setLoading(false);
      navigate('/phones');
    })
    .catch((error) => {
      setLoading(false);
      alert('Ocurrio un Error inesperado'); 
      console.log(error);
    })
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
                Crear Dispositivo
              </div>
              <div className="flex w-full place-content-center">
                <div className="p-2 my-2 w-1/2">
                  <label className="text-xl mr-4 text-sky-500">Marca</label>
                  <input type="text" value={make} onChange={(e) => setMake(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" />
                </div>
                <div className="p-2 my-2 w-1/2">
                  <label className="text-xl mr-4 text-sky-500">Serial</label>
                  <input type="text" value={serial} onChange={(e) => setSerial(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" />
                </div>
              </div>
              <div className="flex w-full place-content-center">
                <div className="p-2 my-2 w-1/2">
                  <label className="text-xl mr-4 text-sky-500">Oficina</label>
                  <select value={location} onChange={(e) => setLocation(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl">
                    <option value="Puerto Madero">Puerto Madero</option>
                    <option value="San Martin">San Martin</option>
                    <option value="Mar del Plata">Mar del Plata</option>
                    <option value="Rosario">Rosario</option>
                    <option value="Cordoba">Cordoba</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Posadas">Posadas</option>
                  </select>
                </div>
                <div className="p-2 my-2 w-1/2">
                  <label className="text-xl mr-4 text-sky-500">Departamento</label>
                  <select value={department} onChange={(e) => setDepartment(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl">
                    <option value="RRHH">RRHH</option>
                    <option value="Asistencias">Asistencias</option>
                    <option value="Administracion">Administracion</option>
                    <option value="Emisiones">RRHH</option>
                    <option value="Comerciales">RRHH</option>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                  </select> 
                </div>
              </div>
              <div className="flex w-full place-content-center">
                <div className="p-2 my-2 w-1/2">
                    <label className="text-xl mr-4 text-sky-500">Numero</label>
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" />
                  </div>
                <div className="p-2 my-2 w-1/2">
                  <label className="text-xl mr-4 text-sky-500">Interno</label>
                  <input type="text" value={ext} onChange={(e) => setExt(e.target.value)} className="px-4 py-4 w-full text-sky-500 rounded-xl" />
                </div>
              </div>
              <div className="d-flex flex place-content-center">
                <button className="p-2 bg-sky-500 mt-2 rounded text-white" onClick={handleSavePhone}>
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

export default CreatePhone