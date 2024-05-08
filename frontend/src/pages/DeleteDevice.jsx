import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton  from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import Sidebar from '../components/Sidebar.jsx';
import axios from 'axios';

const DeleteDevice = () => {
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteDevice = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/devices/${id}`)
      .then(() =>{
        setLoading(false);
        navigate('/');
      }).catch((error) => {
        setLoading(false);
        alert('Ha ocurrido un error');
        console.log(error);
      });
  };
  return (
    <div className="{ 'dark': isDark }">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 dark:text-white"> 
        <Sidebar />
       
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                { loading? <Spinner /> : '' }
                <BackButton />
              </div>
              <div className="w-full flex place-content-center pb-2">
                Editar Dispositivo
              </div>
              <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl p-8 mx-auto">
                <h3 className="text-2xl">Seguro que quieres eliminar esta entrada?</h3>
                <button className="p-4 bg-red-500 rounded text-white m-8 w-full hover:bg-red-700" 
                  onClick={handleDeleteDevice} >
                  Eliminar
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteDevice