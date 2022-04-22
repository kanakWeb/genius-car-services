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
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';


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

       <Route path='/checkout' element={
         <RequireAuth>
           <Checkout></Checkout>
         </RequireAuth>
       }></Route>

       <Route path='/addservice' element={
         <RequireAuth>
           <AddService></AddService>
         </RequireAuth>
       }></Route>

       <Route path='/manage' element={
         <RequireAuth>
           <ManageServices></ManageServices>
         </RequireAuth>
       }></Route>

     </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
