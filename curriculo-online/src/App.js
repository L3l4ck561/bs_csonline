import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Portifolio from './pages/projetos';
import Contato from './pages/contato';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </HashRouter>
  );
}

export default App;