import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HOME/main';
import Portifolio from './pages/WORK/portifolio';
import Contato from './pages/PARTY/certificado';
import Corre from './pages/curriculo';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/outros-certificados" element={<Contato />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

