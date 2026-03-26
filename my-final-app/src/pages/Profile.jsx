import StreakCounter from "../components/StreakCounter";
import ProfileCard from "../components/ProfileCard";
import jaydesPic from "../assets/Jaydes.png";

function Profile() {
  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] flex flex-col items-center pt-32 px-6">
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">Profile</h1>

        <ProfileCard
          name="Yen"
          role="Music Artist"
          bio="Beatiufl music fits beatiful people"
          image={jaydesPic}
        >
          <StreakCounter days={7} />
        </ProfileCard>

      </div>
    </div>
  );
}

export default Profile;