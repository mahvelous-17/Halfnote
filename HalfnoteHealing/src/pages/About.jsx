import Card from "../components/Card"; 
import AndrewImg from "../assets/Andrew.png";
import RyanImg from "../assets/Ryan.png";
import Mission from "../components/Mission";
import HoudiniTxt from "../components/HoudiniTxt";

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mx-auto max-w-4xl bg-[#0c0c0c] px-6 pt-28 pb-24">
      
      <HoudiniTxt>
      <h1 className="text-white mb-10 text-3xl font-bold">About Our Team</h1>
      </HoudiniTxt>

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