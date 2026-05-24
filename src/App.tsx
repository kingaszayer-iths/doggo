import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Tips from "./pages/Tips";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ActivityDetails from "./pages/ActivityDetails";
import ArticleDetails from "./pages/ArticleDetails";


function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Hoppa till innehåll
      </a>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/tips/:id" element={<ArticleDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;