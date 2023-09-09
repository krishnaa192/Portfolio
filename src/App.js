import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import Education from './component/Education';
import Contact from './component/Contact';
import Skills from './component/Section';
import Project from './component/Projects';
import Footer from './component/Footer';


function App() {
  return (
    <div >
      {/* <Header /> */}
       {/* <Main / */}
      {/* <Section/> */}
      {/* <Contact /> */} 
      {/* <Main /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
