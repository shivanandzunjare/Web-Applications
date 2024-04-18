
import { Outlet, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
