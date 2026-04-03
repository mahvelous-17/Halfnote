import StreakCounter from "../components/StreakCounter";
import ProfileCard from "../components/ProfileCard";
import MoodGraph from "../components/MoodGraph";
import jaydesPic from "../assets/Jaydes.png";
import HoudiniTxt from "../components/HoudiniTxt";

function Profile() {
  const weeklyMoodData = [
    { day: "MON", val: 3 },
    { day: "TUE", val: 2 },
    { day: "WED", val: 3 },
    { day: "THU", val: 5 },
    { day: "FRI", val: 3 },
    { day: "SAT", val: 4 },
    { day: "SUN", val: 5 },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] flex flex-col items-center pt-32 px-6">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <HoudiniTxt>
        <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">Profile</h1>
        </HoudiniTxt>

        <ProfileCard
          name="Yen"
          role="Music Artist"
          bio="Beautiful music fits beautiful people"
          image={jaydesPic}
        >
          <StreakCounter days={7} />
        </ProfileCard>

        <MoodGraph data={weeklyMoodData} />

      </div>
    </div>
  );
}

export default Profile;