import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <PrimaryButton 
      onClick={() => setLikes(likes + 1)} 
      className="px-3 py-2"
      style={{
        background: "rgba(255,255,255,0.2)",
      }}
    >
      ❤️ {likes}
    </PrimaryButton>
  );
}


export default LikeButton;