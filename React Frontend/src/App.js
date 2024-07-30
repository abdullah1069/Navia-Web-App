import './App.css';
import NavBar from './Componet/Navbar_Componnet/NavBar.js';
import HomeNaiva from './Componet/HomeNaiva.js';
import Bodyfat from './Componet/Bodyfat_page/Bodyfat.js';
import Bmr from './Componet/BMR_page/Bmr.js';
import Nutri from './Componet/Nutrition_page/Nutri.js';
import Work from './Componet/Workout_page/Work.js';
import Footer from './Componet/Footer_componnet/Footer.js'
import {BrowserRouter ,Route,Routes,} from "react-router-dom";
function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
            <Routes>
              <Route exact path="/" element={<HomeNaiva/>}/>
              <Route exact path="/bodyfat" element={<Bodyfat/>}/>
              <Route exact path="/bmr" element={<Bmr/>}/>
              <Route exact path="/nutri" element={<Nutri/>}/>
              <Route exact path="/work" element={<Work/>}/>
            </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
