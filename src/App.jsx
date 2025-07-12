
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import './App.css'
import { Footer } from './components/Footer/Footer';
import Formacion from './pages/Formacion/Formacion';
import ExperienciaLaboral from './pages/ExperienciaLaboral/ExperienciaLaboral'

function App() {


  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formacionycursos" element={<Formacion />} />
            <Route path="/experiencialaboral" element={<ExperienciaLaboral />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
