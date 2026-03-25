function MoodButton({ emoji, label, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(emoji)}
      className={`p-4 border-2 rounded-xl transition ${
        isSelected ? "border-white bg-zinc-800" : "border-zinc-700"
      }`}
    >
      <div className="text-4xl">{emoji}</div>
      <p className="text-sm mt-2 text-gray-400">{label}</p>
    </button>
  );
}
export default MoodButton;