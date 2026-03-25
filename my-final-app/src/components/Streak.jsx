function Streak({ count }) {
  return (
    <div className="m-4 p-3 border-2 border-orange-500 rounded-3xl inline-block shadow-md">
      <p className="text-xl font-bold text-white">🔥 {count} Day Streak!</p>
    </div>
  );
}
export default Streak;