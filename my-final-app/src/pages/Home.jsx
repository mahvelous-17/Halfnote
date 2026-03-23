import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4 text-center">
      
      <h1>Hello World</h1>
      <p>This is the starter page for Halfnote Healing</p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          {}
          <img src="/Halfnote.png" className="img-fluid d-block mx-auto" style={{ maxWidth: "200px" }} alt="Logo" />
        </div>
      </div>

      <h3 className="mt-4">Project Sections</h3>

      <ul className="list-unstyled">
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/about">Therapy</Link></li>
        <li><Link to="/profile">Past Entries</Link></li>
      </ul>

      <div className="border p-3 mt-4" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
        <p>This is a placeholder section for future content.</p>
      </div>

    </div>
  );
}

export default Home;