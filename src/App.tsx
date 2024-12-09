import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/home/home";
import { Logement } from "./page/accommodation/accommodation";
import { About } from "./page/about/about";
import { Error } from "./page/error/error";
import { Header } from "./component/header/header";
import { Footer } from "./component/footer/footer";
export function App() {
  return (
    <Router basename="/kasa/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
