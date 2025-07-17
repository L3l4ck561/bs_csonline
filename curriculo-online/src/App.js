import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Portifolio from './pages/projetos';
import Contato from './pages/contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;