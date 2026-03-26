import { useState } from "react";
import StreakCounter from "../components/StreakCounter";
import MoodButton from "../components/MoodButton";

function MoodEntry() {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [streak] = useState(7);

  const handleCheckMood = () => {
    if (selectedMood === "") {
      alert("Please select a mood emoji first!");
    } else {
      alert(`Mood logged: ${selectedMood}. Loading your activity...`);
    }
  };

  return (
    <div className="pt-10 min-h-screen text-white text-center">
      <StreakCounter days={streak} />

      <div className="max-w-2xl mx-auto px-6 pb-16">
        <h1 className="text-4xl font-bold mb-3">How's the music feeling today?</h1>
        <p className="text-white/60 mb-10 text-base">Select your starting mood</p>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          <MoodButton emoji="😔" label="Low"    isSelected={selectedMood === "😔"} onSelect={setSelectedMood} />
          <MoodButton emoji="😐" label="Meh"    isSelected={selectedMood === "😐"} onSelect={setSelectedMood} />
          <MoodButton emoji="🙂" label="Steady" isSelected={selectedMood === "🙂"} onSelect={setSelectedMood} />
          <MoodButton emoji="😊" label="Good"   isSelected={selectedMood === "😊"} onSelect={setSelectedMood} />
          <MoodButton emoji="✨" label="Great"  isSelected={selectedMood === "✨"} onSelect={setSelectedMood} />
        </div>

        <div className="mt-10 p-6 border border-white/10 rounded-2xl text-left bg-white/5 max-w-xl mx-auto">
          <h3 className="text-base font-semibold mb-3 text-white/80 tracking-wide uppercase">
            Reflect <span className="normal-case font-normal text-white/40">(optional)</span>
          </h3>
          <textarea
            rows={4}
            className="w-full bg-transparent border border-white/10 rounded-xl p-4 text-white text-sm outline-none focus:border-white/40 transition-colors placeholder-white/30 resize-none"
            placeholder="What's on your mind?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button
          onClick={handleCheckMood}
          className="mt-8 px-8 py-3 border-2 border-white font-semibold rounded-xl hover:bg-white hover:text-[#338ad1] transition-all duration-200 cursor-pointer text-sm tracking-wide"
        >
          Get Music Guided Activity
        </button>
      </div>
    </div>
  );
}

export default MoodEntry;