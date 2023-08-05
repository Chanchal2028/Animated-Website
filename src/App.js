import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Footer from './Components/Footer';
import { Routes,Route } from "react-router";
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route exact path='/' Component={()=><Home/>}/> 
    <Route exact path='/about' Component={()=><About name="About"/>}/>
    <Route exact path='/contact' Component={()=><Contact name="Contact"/>}/>
    <Route exact path='/service' Component={()=><Service name="Service"/>}/>
    <Route path='*' Component={()=><Home/>}/>
    </Routes>
    <Footer/>
    {/* <Navigate to="/" replace="true"/> */}
    </div>
  );
}

export default App;
