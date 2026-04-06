import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HOME/main';
import Portifolio from './pages/WORK/portifolio';
import Contato from './pages/PARTY/certificado';
import Contato2 from './pages/curriculo';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Contato2 />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/outros-certificados" element={<Contato />} />
      </Routes>
    </HashRouter>
  );
}

export default App;