import Card from "../components/Card"; 
import AndrewImg from "../assets/Andrew.png";
import RyanImg from "../assets/Ryan.png";

function About() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <h1 style={{ color: "white" }}>About Our Team</h1>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "40px", width: "100%" }}>
        <Card
          name="Andrew"
          title="Main Coder"
          blurb="I design and code the core features."
          extra="Computer Engineering student at Cal Poly SLO."
          img={AndrewImg}
          emoji="💻"
        />
        <Card
          name="Ryan"
          title="Project Manager"
          blurb="I make sure the project stays on track."
          extra="Electrical Engineering student."
          img={RyanImg}
          emoji="📋"
        />
      </div>
    </div>
  );
}

export default About;