import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Services/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Regiester/Register';

function App() {
  return (
    <div style={{background:"white"}} >
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/service/:serviceId' element={<ServicesDetails></ServicesDetails>}></Route>
       
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/regiester' element={<Register></Register>}></Route>
       <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
