import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/characters">Przejdź do Characters</Link>
          </li>
          <li>
            <Link to="/episodes">Przejdź do Episodes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

