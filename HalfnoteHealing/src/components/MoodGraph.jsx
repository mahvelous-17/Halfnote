import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import BarGraph from "./BarGraph";

function MoodGraph({ data }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "650px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderRadius: "16px",
        padding: "40px",
        marginTop: "24px",
        border: "none",
        boxShadow: "none",
        outline: "none",
      }}
    >
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/30">
          Activity Last 7 Days
        </h3>
      </div>

      <BarGraph data={data} chartHeight={250} spacing={60} />

      <div className="w-full flex justify-center mt-10 pt-8">
        <div className="scale-90">
          <PrimaryButton onClick={() => navigate("/mood")}>
            Show More
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default MoodGraph;
