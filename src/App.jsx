import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/navbar.jsx';
import About from './assets/About.jsx';
import Join from './assets/join.jsx';
import Contact from './assets/contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>



        </div>} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
