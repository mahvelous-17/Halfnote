import { useState } from 'react';
import MoodButton from "../components/MoodButton"; 
{/* add a streak counter days ^1 later */}

function Reflect() {
  const [note, setNote] = useState('');
  const [selectedMood, setSelectedMood] = useState('');

  const moods = [
    { emoji: "😔", label: "Low" },
    { emoji: "😐", label: "Meh" },
    { emoji: "🙂", label: "Happy" },
    { emoji: "😊", label: "Amazing" },
    { emoji: "✨", label: "Great" }
  ];
  return (
    <div className="w-full max-w-4xl mx-auto text-white flex flex-col items-center pt-24 px-6">
         <div className="w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Reflection Page</h1>
        </div>

        <h2 className="text-3xl font-bold mb-2 tracking-tight">Great JOB!</h2>
        <p className="text-white/50 mb-10 text-sm">How was that Acivity? Did it help with your mood?</p>


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
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: 'none', outline: 'none', boxShadow: 'none', padding: '24px',   borderRadius: '10px',  }}
        >
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-2">
            Wanna say more? (Reccomended!)
          </h3>
          <textarea
            rows={4}
            className="w-full bg-transparent text-white text-lg placeholder-white/10 resize-none text-center"
            style={{ 
              outline: 'none', 
              boxShadow: 'none', 
              border: 'none'
            }}
            placeholder="Be honest! How did this activity make you feel? This is just for you."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
    </div>
  );
}

export default Reflect;