  import 'bootstrap/dist/css/bootstrap.min.css';
   import { BrowserRouter, Routes, Route } from "react-router-dom";
 
 
 import Login from './screens/login';
 import Register from './screens/Register';
import Item from './screens/Item';
import Dashboard from './screens/Dashboard';
import Authnavbar from './componants/Authnavbar';
  
   const App = () => {
    return (
      <BrowserRouter>
      <div> 
        <Authnavbar/>
      <Routes>
        <Route path='/' element={<Login/>} />

        <Route path="/register" element={<Register/>}/>
         <Route path="/Item" element={<Item/>}/>
         <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
        </div>
       </BrowserRouter>
        
       
    )
  }
  
  export default App
  