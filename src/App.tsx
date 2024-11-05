import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/home";
import { Logement } from "./page/logement";
import { APropos } from "./page/a-propos";
import { Error } from "./page/error";
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
