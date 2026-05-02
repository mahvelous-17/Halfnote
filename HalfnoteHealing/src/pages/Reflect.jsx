import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../supabase";
import MoodButton from "../components/MoodButton";
import PrimaryButton from "../components/PrimaryButton";
import Loadingbar from "../components/Loadingbar";
import HoudiniTxt from "../components/HoudiniTxt";

function Reflect({ session }) {
  const [note, setNote] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const moodEntryId = location.state?.moodEntryId;

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/profile");
        return;
      }
    };
    
    checkSession();
  }, [navigate]);

  const moods = [
    { emoji: "😔", label: "Low", score: 1 },
    { emoji: "😐", label: "Meh", score: 2 },
    { emoji: "🙂", label: "Happy", score: 3 },
    { emoji: "😊", label: "Amazing", score: 4 },
    { emoji: "✨", label: "Great", score: 5 },
  ];

  const handleLogEntry = async () => {
    if (!selectedMood) return alert("Please rate the activity first!");

    const moodObj = moods.find((m) => m.emoji === selectedMood);
    const user = session?.user;

    if (user && moodEntryId && moodObj) {
      const { error } = await supabase
        .from("mood_entries")
        .update({ mood_after: moodObj.score })
        .eq("id", moodEntryId);

      if (error) console.error(error);
    }

    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#0c0c0c]">
      <div className="w-full max-w-[480px] flex flex-col items-center gap-6">
        <div className="text-center">
          <HoudiniTxt>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
              Reflection Page
            </h1>
          </HoudiniTxt>
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Great JOB!</h2>
          <p className="text-white/50 mb-10 text-sm">
            How was that Activity? Did it help with your mood?
          </p>
        </div>

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            width: '100%'
          }}>
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

      <div
        className="w-full rounded-[10px] flex flex-col items-center"
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          border: "none",
          padding: "24px",
        }}
      >
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-2 text-center">
          Wanna say more? (Recommended!)
        </h3>
        <textarea
          rows={4}
          className="w-full bg-transparent text-white text-lg placeholder-white/10 resize-none text-center shadow-none"
          placeholder="Be honest! How did this activity make you feel? This is just for you."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="w-full flex items-center justify-center">
        {!isSubmitted ? (
          <PrimaryButton onClick={handleLogEntry}>Log this entry</PrimaryButton>
        ) : (
          <Loadingbar message="Entry saved! Thank you !" />
        )}
      </div>
      </div>
    </div>
  );
}

export default Reflect;
