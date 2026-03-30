import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import MoodEntry from "./pages/MoodEntry";
import Reflect from "./pages/Reflect";
import MusicAct from "./pages/MusicAct";
import MoodHis from "./pages/MoodHis";
import "./App.css";
function App() {
  return (
    <>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen"> 
        <Header />
        
        <main className="flex-1 w-full flex flex-col items-center pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/log-mood" element={<MoodEntry />} />
            <Route path="/reflect" element={<Reflect />} />
           <Route path="/music-act" element={<MusicAct />} />
           <Route path="/mood" element={<Moodhis />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    
 
</>
  );
}

export default App;