import Card from "../components/Card"; 
import AndrewImg from "../assets/Andrew.png";
import RyanImg from "../assets/Ryan.png";
import Mission from "../components/Mission";

function About() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 20px" }}>
      
      <h1 style={{ color: "white", marginBottom: "40px" }}>About Our Team</h1>


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

      <div style={{  background: "linear-gradient(to right, #ff0000, #00c3ff, #ff0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            color: "transparent", 
            fontSize: "15px",
            lineHeight: "17px",
            textAlign: "center",
            whiteSpace: "pre",
            margin: "0 auto",
            border: "none",
            fontWeight: "bold"
             width: "100%", 
             maxWidth: "800px" }}>
        <Mission
          textHeader="Our Mission"
          myMission="To create a place where people may access music-guided therapy that helps users improve mental health"
        />
        
      </div>

    </div>
  );
}

export default About;