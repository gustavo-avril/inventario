
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Phones from './pages/Phones';
import CreateDevice from './pages/CreateDevice';
import EditDevice from './pages/EditDevice';
import ShowDevice from './pages/ShowDevice';
import DeleteDevice from './pages/DeleteDevice';
import CreatePhone from './pages/CreatePhone';
import EditPhone from './pages/EditPhone';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/devices/create' element={<CreateDevice />} />
      <Route path='/devices/details/:id' element={<ShowDevice />} />
      <Route path='/devices/edit/:id' element={<EditDevice />} />
      <Route path='/devices/delete/:id' element={<DeleteDevice />} />
      <Route path='/phones' element={<Phones />} />
      <Route path='/phones/create' element={<CreatePhone />} />
      <Route path='/phones/edit/:id' element={<EditPhone />} />
    </Routes>
  )
}

export default App;
