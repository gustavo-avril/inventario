
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateDevice from './pages/CreateDevice';
import EditDevice from './pages/EditDevice';
import ShowDevice from './pages/ShowDevice';
import DeleteDevice from './pages/DeleteDevice';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/devices/create' element={<CreateDevice />} />
      <Route path='/devices/details/:id' element={<ShowDevice />} />
      <Route path='/devices/edit/:id' element={<EditDevice />} />
      <Route path='/devices/delete/:id' element={<DeleteDevice />} />
    </Routes>
  )
}

export default App