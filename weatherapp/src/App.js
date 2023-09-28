import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componenet/Home';
import Navbar from './Componenet/Navbar';
import Footer from './Componenet/Footer';

function App() {
  return (
    <div>
      <Routes>
        {/* <Navbar/> */}
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
