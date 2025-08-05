import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ClientsManagement } from "./components/ClientsManagement";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientsManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
