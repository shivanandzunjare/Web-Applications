
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import AddCourse from './components/AddCourse';
import Home from './components/Home';
import EditCourse from './components/EditCourse';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<AddCourse/>}></Route>
          <Route path='/edit/:id' element={<EditCourse/>}></Route>
          
        </Routes >
      </div>
      
    </div>
  );
}

export default App;
