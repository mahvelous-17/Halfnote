function StreakCounter({ days }) {
  return (
    <div className="m-6 border-2 border-orange-400 p-4 rounded-3xl inline-block shadow-md">
      <h2 className="text-xl font-bold text-white">🔥 {days} Day Streak</h2>
    </div>
  );
}
export default StreakCounter;