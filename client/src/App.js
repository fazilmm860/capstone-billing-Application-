import { StyleProvider } from '@ant-design/cssinjs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import ItemPage from './pages/ItemPage';
import CartPage from './pages/CartPage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/items' element={<ItemPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
