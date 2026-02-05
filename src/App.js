
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/home';
import { Projects } from './components/Projects';
import { Sidebar } from './components/sidebar';
import { Skills } from './components/Skills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex w-100'>
        <Sidebar />
        <div className='p-2 w-75'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
