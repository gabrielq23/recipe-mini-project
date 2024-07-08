import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/recipes" element={<Recipes />}/>
            <Route path="/settings" element={<Settings />}/>
          </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
