import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import MoodEntry from "./pages/MoodEntry";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-20 w-full flex-1 flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/log-mood" element={<MoodEntry />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;