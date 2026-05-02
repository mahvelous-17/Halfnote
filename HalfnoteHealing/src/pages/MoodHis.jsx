import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import HoudiniTxt from "../components/HoudiniTxt";

function getMoodLabel(score) {
  const labels = {
    1: "AWFUL",
    2: "BAD", 
    3: "MEH",
    4: "GOOD",
    5: "GREAT"
  };
  return labels[score] || "—";
}

function groupEntriesByMonth(entries) {
  const grouped = {};
  
  entries.forEach(entry => {
    const date = new Date(entry.created_at);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!grouped[monthKey]) {
      grouped[monthKey] = [];
    }
    grouped[monthKey].push(entry);
  });
  
  return Object.entries(grouped)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([monthKey, entries]) => {
      const [year, month] = monthKey.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, 1);
      return {
        monthKey,
        monthLabel: date.toLocaleDateString("en-US", { month: "long", year: "numeric" }).toUpperCase(),
        entries: entries.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      };
    });
}

function MoodHis({ session }) {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupedEntries, setGroupedEntries] = useState([]);
  const user = session?.user;

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const load = async () => {
      setLoading(true);
      
      const { data: rows } = await supabase
        .from("mood_entries")
        .select("id, created_at, mood_score, mood_after")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      const entriesData = rows ?? [];
      setEntries(entriesData);
      setGroupedEntries(groupEntriesByMonth(entriesData));
      setLoading(false);
    };

    load();
  }, [user]);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate("/profile");
    };
    checkSession();
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#0c0c0c] text-white/40 text-sm">
        <a
          href="/profile"
          className="text-white/50 hover:text-white/80 uppercase tracking-widest text-xs"
        >
          Sign in to view mood history
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#0c0c0c]">
      <div className="w-full max-w-[480px] flex flex-col items-center gap-6">
        <HoudiniTxt>
          <h1 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30 mb-2 text-center">
            Mood Logs
          </h1>
        </HoudiniTxt>
        <HoudiniTxt>
          <h2 className="text-4xl font-bold tracking-tighter mb-8 text-center">
            History
          </h2>
        </HoudiniTxt>

        {loading ? (
          <div className="w-full h-6 rounded-lg bg-white/5 animate-pulse mb-3" />
        ) : groupedEntries.length === 0 ? (
          <p className="text-white/20 text-[11px] font-bold uppercase tracking-[0.3em] text-center">
            NO ENTRIES YET
          </p>
        ) : (
          <div className="w-full space-y-8">
            {groupedEntries.map((group) => (
              <div key={group.monthKey} className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/20 mt-8 mb-3">
                  {group.monthLabel}
                </p>
                <div className="space-y-2">
                  {group.entries.map((entry) => (
                    <p key={entry.id} className="text-[13px] text-white/50">
                      {new Date(entry.created_at).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric'
                      })} · {getMoodLabel(entry.mood_score)} → {getMoodLabel(entry.mood_after)}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoodHis;
