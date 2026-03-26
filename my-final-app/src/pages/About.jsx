import Card from "../components/Card"; 
import AndrewImg from "../assets/Andrew.png";
import RyanImg from "../assets/Ryan.png";
import Mission from "../components/Mission";

function About() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center pt-24 pb-10 px-6">
      
      <h1 className="text-white mb-10">About Our Team</h1>


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
            fontWeight: "bold",
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