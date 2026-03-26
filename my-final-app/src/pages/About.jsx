import Card from "../components/Card"; 
import AndrewImg from "../assets/Andrew.png";
import RyanImg from "../assets/Ryan.png";

function About() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center pt-24 pb-10 px-6">
      
      <h1 className="text-white mb-10 text-3xl font-bold">About Our Team</h1>

      <div style={{ 
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        gap: "40px", 
        width: "100%",
        marginBottom: "60px" 
      }}>
        <Card
          name="Andrew"
          title="Main Coder"
          blurb="I design and code the core features."
          extra="Future Computer Engineering student at Cal Poly SLO."
          img={AndrewImg}
          emoji="💻"
        />
        <Card
          name="Ryan"
          title="Project Manager"
          blurb="I make sure the project stays on track."
          extra="Future Electrical Engineering student."
          img={RyanImg}
          emoji="📋"
        />
      </div>

      <div style={{
        background: "linear-gradient(to right, #ff0000, #00c3ff, #ff0080)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>
          Our Mission
        </h2>
        <p style={{ fontSize: "18px", fontWeight: "bold", lineHeight: "1.4" }}>
          To create a place where people may access music-guided therapy 
          that helps users improve mental health
        </p>
      </div>

    </div>
  );
}

export default About;