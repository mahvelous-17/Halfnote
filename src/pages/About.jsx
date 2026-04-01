import Card from "../components/Card"; 
import AndrewImg from "../assets/Andrew.png";
import RyanImg from "../assets/Ryan.png";
import Mission from "../components/Mission";

function About() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center ">
      
      <h1 className="text-white mb-10 text-3xl font-bold">About Our Team</h1>

      <div style={{ 
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        gap: "40px", 
        width: "100%",
        marginBottom: "20px" 
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

      <div className="w-full max-w-[600px] mx-auto mt-0 pt-0">
        <Mission 
          textHeader="Our Mission" 
         myMission={
            <>
              To create a place where people may access music-guided therapy 
              <br /> 
              that helps users improve mental health
            </>
            }
        />
      </div>

    </div>
  );
}

export default About;