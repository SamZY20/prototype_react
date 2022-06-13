import UnitPage from "./pages/UnitPage";
import About from "./pages/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/units" element={<UnitPage />}></Route>
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
