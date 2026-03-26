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
      <div className="flex flex-col items-center w-full min-h-screen">
        
        <Header />


        <main className="w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/log-mood" element={<MoodEntry />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;