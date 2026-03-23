import Card from "./Card";
import AndrewImg from "../assets/andrew.png";
import RyanImg from "../assets/ryan.jpg";

function AboutMe() {
  return (
    <section className="p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-2">
        About Our Team
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Meet the people working on this project
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <Card
          name="Andrew"
          title="Main Coder"
          blurb="I design and code the core features of the project."
          img={AndrewImg}
        />
        <Card
          name="Ryan"
          title="Project Manager"
          blurb="I make sure the project stays on track."
          img={RyanImg}
        />
      </div>
    </section>
  );
}

export default AboutMe;