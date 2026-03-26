function MoodButton({ emoji, label, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(emoji)}
      className={`p-4 border-2 rounded-xl transition-all ${
        isSelected 
          ? "border-white bg-white/20" 
          : "border-white/10 bg-transparent hover:border-white/30"
      }`}
    >
      <div className="text-4xl">{emoji}</div>
      <p className={`text-sm mt-2 ${isSelected ? "text-white" : "text-white/60"}`}>
        {label}
      </p>
    </button>
  );
}

export default MoodButton;