
import { HashRouter, Routes, Route } from "react-router-dom";

import { Header } from "./assets/components/Header";

import Home from "./assets/components/Home";

import Galeria from "./assets/components/Galeria";

import GaleriaMusica from "./assets/components/GaleriaMusica";

import GaleriaBatuque from "./assets/components/GaleriaBatuque";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/musicas" element={<GaleriaMusica />} />
        <Route path="/batuque" element={<GaleriaBatuque/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

