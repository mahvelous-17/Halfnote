function StreakCounter({ days }) {
  return (
    <div className="p-2 inline-block shadow-md">
      <h2 className="text-xl font-bold text-white">🔥 {days} Day Streak</h2>
    </div>
  );
}
export default StreakCounter;