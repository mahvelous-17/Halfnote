import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoodButton from "../components/MoodButton"; 
import StreakCounter from "../components/StreakCounter";
import PrimaryButton from "../components/PrimaryButton";
import Loadingbar from "../components/Loadingbar";
import HoudiniTxt from "../components/HoudiniTxt";


function MoodEntry() {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [streak] = useState(7);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const moods = [
    { emoji: "😔", label: "Low" },
    { emoji: "😐", label: "Meh" },
    { emoji: "🙂", label: "Happy" },
    { emoji: "😊", label: "Amazing" },
    { emoji: "✨", label: "Great" }
  ];

  const handleCheckMood = () => {
    if (!selectedMood) return alert("Please select a mood emoji first!");
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/music-act");
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-white flex flex-col items-center pt-24 px-6 bg-[#0c0c0c]">
      <div className="w-full flex items-center justify-center gap-1 pb-6">
        <HoudiniTxt>
        <h1 className="text-4xl font-bold text-white tracking-tight">Log Mood</h1>
        </HoudiniTxt>
        <StreakCounter days={streak} />
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center mt-6 text-center">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">How are you feeling today?</h1>
        <p className="text-white/50 mb-10 text-sm">Pick the mood that matches right now</p>

        {/* Mood Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', gap: '12px', width: '100%', marginTop: '32px' }}>
          {moods.map((m) => (
            <MoodButton
              key={m.label}
              emoji={m.emoji}
              label={m.label}
              isSelected={selectedMood === m.emoji}
              onSelect={setSelectedMood}
            />
          ))}
        </div>

        {/* Reflection Box */}
        <div 
          className="w-full mt-12 rounded-3xl"
          style={{ backgroundColor: '#0000000d', border: 'none', outline: 'none', boxShadow: 'none', padding: '24px',   borderRadius: '10px',  }}
        >
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-2">
            Reflection (Recomended)
          </h3>
          <textarea
            rows={4}
            className="w-full bg-transparent text-white text-lg placeholder-white/10 resize-none text-center"
            style={{ 
              outline: 'none', 
              boxShadow: 'none', 
              border: 'none',
              resize: 'none',
            }}
            placeholder="What's on your mind?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>


        {/* Success message */}
     <div className="mt-20 w-full max-w-md h-24 flex items-center justify-center">
          {!isSubmitted ? (
            <PrimaryButton onClick={handleCheckMood}>
              Get Music Guided Activity
            </PrimaryButton>
          ) : (
            <Loadingbar message="Mood logged successfully! Loading your activity" />
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodEntry;