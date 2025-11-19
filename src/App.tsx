import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home";
import Beneficios from "./pages/Beneficios";
import Quienes from "./pages/Quienes";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/beneficios"
          element={<Beneficios />}
        />
        <Route
          path="/quienes-somos"
          element={<Quienes />}
        />
        <Route
          path="/contacto"
          element={<Contacto />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/post/:slug"
          element={<Posts />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
