import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import MoodButton from "../components/MoodButton";
import StreakCounter from "../components/StreakCounter";
import PrimaryButton from "../components/PrimaryButton";
import Loadingbar from "../components/Loadingbar";
import HoudiniTxt from "../components/HoudiniTxt";

function MoodEntry({ session }) {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [streak, setStreak] = useState(0);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const moods = [
    { emoji: "😔", label: "Low", score: 1 },
    { emoji: "😐", label: "Meh", score: 2 },
    { emoji: "🙂", label: "Happy", score: 3 },
    { emoji: "😊", label: "Amazing", score: 4 },
    { emoji: "✨", label: "Great", score: 5 },
  ];

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/profile");
        return;
      }
      
      if (session?.user) {
        const fetchStreak = async () => {
          const { data } = await supabase
            .from("profiles")
            .select("streak_count")
            .eq("id", session.user.id)
            .single();
          if (data) setStreak(data.streak_count);
        };
        fetchStreak();
      }
    };
    
    checkSession();
  }, [session, navigate]);

  const handleCheckMood = async () => {
    if (!selectedMood) return alert("Please select a mood emoji first!");

    const moodObj = moods.find((m) => m.emoji === selectedMood);
    const user = session?.user;

    if (!user || !moodObj) return;

    setSaving(true);
    try {
      const { data, error } = await supabase
        .from("mood_entries")
        .insert([{ user_id: user.id, mood_score: moodObj.score }])
        .select("id")
        .single();

      if (error) {
        console.error(error);
        alert("Could not save your mood. Please try again.");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      const today = new Date().toISOString().split("T")[0];
      let newStreak = 1;

      if (profile) {
        const lastEntry = profile.last_entry_date;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];

        if (lastEntry === yesterdayStr) {
          newStreak = profile.streak_count + 1;
        } else if (lastEntry === today) {
          newStreak = profile.streak_count;
        }
      }

      await supabase.from("profiles").upsert({
        id: user.id,
        streak_count: newStreak,
        last_entry_date: today,
      });

      await new Promise(resolve => setTimeout(resolve, 1800));
      navigate("/music-act", {
        state: { moodEntryId: data.id },
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#0c0c0c]">
      <div className="w-full max-w-[480px] flex flex-col items-center gap-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <HoudiniTxt>
            <h1 className="text-4xl font-bold text-white tracking-tight">Log Mood</h1>
          </HoudiniTxt>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">
            How are you feeling today?
          </h2>
          <p className="text-white/50 mb-10 text-sm">
            Pick the mood that matches right now
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
            className="w-full rounded-[10px] flex flex-col items-center justify-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "none",
              padding: "24px",
            }}
          >
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-2">
              Reflection (Recommended)
            </h3>
            <textarea
              rows={4}
              className="w-full bg-transparent text-white text-lg placeholder-white/10 resize-none text-center shadow-none"
              placeholder="What's on your mind?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="w-full flex items-center justify-center">
            {!saving ? (
              <PrimaryButton onClick={handleCheckMood}>
                Get Music Guided Activity
              </PrimaryButton>
            ) : (
              <Loadingbar message="Mood logged! Loading your activity..." />
            )}
          </div>
      </div>
    </div>
  );
}

export default MoodEntry;
