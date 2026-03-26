function MoodButton({ emoji, label, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(emoji)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        outline: "none",
        padding: "10px",
        transform: isSelected ? "scale(1.25)" : "scale(1)",
        opacity: isSelected ? 1 : 0.4,
        transition: "all 0.3s ease"
      }}
    >
      <span style={{ fontSize: "40px", marginBottom: "8px" }}>
        {emoji}
      </span>
      <p style={{ 
        fontSize: "12px", 
        color: "white", 
        fontWeight: isSelected ? "bold" : "normal",
        letterSpacing: "0.05em"
      }}>
        {label}
      </p>
    </button>
  );
}