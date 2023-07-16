import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyAppProvider } from "./MyAppContext";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import "./assets/css/galeria.css";
import "./assets/css/navbar.css";
import './main.css'


function App() {

  return (
    <MyAppProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MyAppProvider>
  );
}

export default App;