import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MoodButton from "../components/MoodButton"; 
import PrimaryButton from "../components/PrimaryButton";
import Loadingbar from "../components/Loadingbar";
import HoudiniTxt from '../components/HoudiniTxt';

function Reflect() {
  const [note, setNote] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const navigate = useNavigate();

  const moods = [
    { emoji: "😔", label: "Low" },
    { emoji: "😐", label: "Meh" },
    { emoji: "🙂", label: "Happy" },
    { emoji: "😊", label: "Amazing" },
    { emoji: "✨", label: "Great" }
  ];

  const handleLogEntry = () => {
    if (!selectedMood) return alert("Please rate the activity first!");
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/"); 
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-white flex flex-col items-center pt-24 px-6 min-h-screen">
      <div className="w-full max-w-2xl flex flex-col items-center text-center">
        <HoudiniTxt>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Reflection Page</h1>
        </HoudiniTxt>
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Great JOB!</h2>
        <p className="text-white/50 mb-10 text-sm">How was that Activity? Did it help with your mood?</p>
      </div>

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
        className="w-full mt-12"
        style={{ backgroundColor: '#0000000d', padding: '24px', borderRadius: '10px' }}
      >
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-2 text-center">
          Wanna say more? (Recommended!)
        </h3>
        <textarea
          rows={4}
          className="w-full bg-transparent text-white text-lg placeholder-white/10 resize-none text-center outline-none border-none"
          style={{ 
              outline: 'none', 
              boxShadow: 'none', 
              border: 'none',
              resize: 'none'
          }}
          placeholder="Be honest! How did this activity make you feel? This is just for you."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {/* Loading Bar*/}
      <div className="mt-20 w-full max-w-md h-24 flex items-center justify-center">
        {!isSubmitted ? (
          <PrimaryButton onClick={handleLogEntry}>
            Log this entry
          </PrimaryButton>
        ) : (
          <Loadingbar message="Entry saved! Thank you !" />
        )}
      </div>
    </div>
  );
}

export default Reflect;