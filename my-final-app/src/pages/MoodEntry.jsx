import { useState } from "react";
import StreakCounter from "../components/StreakCounter";
import MoodButton from "../components/MoodButton";

function MoodEntry() {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [streak] = useState(7); // Example streak number

  const handleCheckMood = () => {
    if (selectedMood === "") {
      alert("Please select a mood emoji first!");
    } else {
      alert(`Mood logged: ${selectedMood}. Loading your activity...`);
      // Later this will lead to the next page
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-black text-white text-center">
      {/* Streak Component */}
      <StreakCounter days={streak} />

      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">How's the music feeling today?</h1>
        <p className="text-gray-400 mb-8">Select your starting mood</p>

        {/*Mood Buttons */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          <MoodButton emoji="😔" label="Low" isSelected={selectedMood === "😔"} onSelect={setSelectedMood} />
          <MoodButton emoji="😐" label="Meh" isSelected={selectedMood === "😐"} onSelect={setSelectedMood} />
          <MoodButton emoji="🙂" label="Steady" isSelected={selectedMood === "🙂"} onSelect={setSelectedMood} />
          <MoodButton emoji="😊" label="Good" isSelected={selectedMood === "😊"} onSelect={setSelectedMood} />
          <MoodButton emoji="✨" label="Great" isSelected={selectedMood === "✨"} onSelect={setSelectedMood} />
        </div>

        {/*Reflection Box */}
        <div className="mt-10 p-6 border border-zinc-800 rounded-2xl text-left">
          <h3 className="text-lg font-semibold mb-2">Reflect (Optional)</h3>
          <textarea
            className="w-full p-4 bg-zinc-900 border border-zinc-700 rounded-lg text-white outline-none focus:border-white"
            placeholder="What's on your mind?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button
          onClick={handleCheckMood}
          className="mt-10 px-10 py-4 bg-white text-black font-bold text-xl rounded-full hover:bg-zinc-300 transition"
        >
          Get Music Guided Activity
        </button>
      </div>
    </div>
  );
}

export default MoodEntry;