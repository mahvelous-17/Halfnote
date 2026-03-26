function MoodButton({ emoji, label, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(emoji)}
      className="w-14"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        outline: "none",
        padding: "10px",
        transform: isSelected ? "scale(1)" : "scale(0.9)",
        opacity: isSelected ? 1 : 0.3,
        transition: "all 0.3s ease"
      }}
    >
      <span style={{ fontSize: "40px", marginBottom: "8px" }}>
        {emoji}
      </span>
      <p
        style={{
          fontSize: "12px",
          color: "white",
          fontWeight: isSelected ? "bold" : "normal",
          letterSpacing: "0.05em",
          margin: 0
        }}
      >
        {label}
      </p>
    </button>
  );
}

export default MoodButton;