import { BrowserRouter, Routes, Route } from "react-router-dom";
import { supabase } from "./supabase"; 
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import MoodEntry from "./pages/MoodEntry";
import Reflect from "./pages/Reflect";
import MusicAct from "./pages/MusicAct";
import MoodHis from "./pages/MoodHis";
import Settings from "./pages/Settings";
import AuthPage from "./pages/AuthPage";
import "./App.css";

function App() {
  const [session, setSession] = useState(null);

    useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);


  return (
    <BrowserRouter basename="/Halfnote/">
      <div className=" min-h-screen"> 
        <Header session={session} />

        <main className="flex-1 w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile session={session} />} />
            <Route path="/log-mood" element={<MoodEntry session={session} />} />
            <Route path="/reflect" element={<Reflect session={session} />} />
            <Route path="/music-act" element={<MusicAct />} />
            <Route path="/mood" element={<MoodHis session={session} />} />
            <Route path="/musichis" element={<MoodHis session={session} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<AuthPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;