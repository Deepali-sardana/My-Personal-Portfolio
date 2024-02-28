import './App.css';
import AboutMe from './Componenets/AboutMe';
import Footer from './Componenets/Footer';
import Home1 from './Componenets/Home1';
import Navbar from './Componenets/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Project from './Componenets/Project';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home1/>}/>
        <Route exact path='/about' element={<AboutMe/>}/>
        <Route exact path='/project' element={<Project/>}/>
    </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
