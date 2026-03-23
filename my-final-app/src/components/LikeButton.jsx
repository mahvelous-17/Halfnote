import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button 
      onClick={() => setLikes(likes + 1)} 
      style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 15px", borderRadius: "20px", cursor: "pointer" }}
    >
      ❤️ {likes}
    </button>
  );
}

// MAKE SURE THIS LINE IS HERE:
export default LikeButton;