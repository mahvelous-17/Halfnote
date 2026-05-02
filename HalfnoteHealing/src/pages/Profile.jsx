import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import StreakCounter from "../components/StreakCounter";
import ProfileCard from "../components/ProfileCard";
import MoodGraph from "../components/MoodGraph";
import PrimaryButton from "../components/PrimaryButton";
import jaydesPic from "../assets/Jaydes.png";
import HoudiniTxt from "../components/HoudiniTxt";
import {
  streakFromMoodRows,
  sixMonthsAgoIso,
  graphSeriesLastSevenDays,
} from "../utils/moodEntries";

function Profile({ session }) {
  const [streak, setStreak] = useState(0);
  const [weeklyData, setWeeklyData] = useState([]);
  const navigate = useNavigate();
  const user = session?.user;
  const avatarUrl = session?.user?.user_metadata?.avatar_url ?? null;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      setLoading(true);
      const since = sixMonthsAgoIso();
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const [{ data: streakRows }, { data: graphRows }] = await Promise.all([
        supabase
          .from("mood_entries")
          .select("created_at")
          .eq("user_id", user.id)
          .gte("created_at", since)
          .order("created_at", { ascending: false }),
        supabase
          .from("mood_entries")
          .select("created_at, mood_score")
          .eq("user_id", user.id)
          .gte("created_at", sevenDaysAgo.toISOString())
          .order("created_at", { ascending: false }),
      ]);

      setStreak(streakFromMoodRows(streakRows ?? []));
      setWeeklyData(graphSeriesLastSevenDays(graphRows ?? []));
      setLoading(false);
    };

    load();
  }, [user]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (!session?.user) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen mx-auto bg-[#0c0c0c] pt-20 px-6">
        <PrimaryButton onClick={() => navigate("/login")}>Sign In</PrimaryButton>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 px-4 bg-[#0c0c0c]">
      <div className="w-full max-w-[520px] flex flex-col items-center gap-8">
        <HoudiniTxt>
          <h1 className="text-4xl font-bold text-white mb-12 tracking-tight text-center">
            Profile
          </h1>
        </HoudiniTxt>

        {!loading && (
          <ProfileCard
            session={session}
            streak={streak}
            name={user.user_metadata.full_name || user.email.split("@")[0]}
            role="Resilience Member"
            bio="Music therapy journey in progress."
            image={jaydesPic}
          />
        )}

        {loading && (
          <div className="w-full h-32 rounded-lg bg-white/5 animate-pulse" />
        )}

        <MoodGraph data={weeklyData} />

        <PrimaryButton onClick={handleSignOut}>Sign Out</PrimaryButton>
      </div>
    </div>
  );
}

export default Profile;
