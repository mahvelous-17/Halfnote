import { useState } from "react";
import LikeButton from "./LikeButton";
import PrimaryButton from "./PrimaryButton";

function Card({ name, title, blurb, extra, img, emoji }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: "250px", textAlign: "center", color: "white" }}>
      <img src={img} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
      <div style={{ fontSize: "2rem" }}>{emoji}</div>
      <h3 style={{ color: "white" }}>{name}</h3>
      <p style={{ color: "white", fontWeight: "bold" }}>{title}</p>
      <p style={{ color: "white" }}>{blurb}</p>

      <PrimaryButton onClick={() => setIsOpen(!isOpen)} className="px-2 py-1 text-xs">
        {isOpen ? "Show Less" : "Show More"}
      </PrimaryButton>

      {isOpen && (
        <div style={{ marginTop: "10px", padding: "10px" }}>
          <p style={{ color: "white" }}>{extra}</p>
        </div>
      )}

      <div style={{ marginTop: "10px" }}>
        <LikeButton />
      </div>
    </div>
  );
}

export default Card;