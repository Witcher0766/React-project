import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, About, Contact, Projects, NotFound} from './pages';
import {Header, Footer} from './components';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
