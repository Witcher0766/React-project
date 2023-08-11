import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, About, Contact, Projects, Resume} from './pages';
import {Header, Footer} from './components';


function App() {

  

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
