import "./ProjectsStyle.css";

const projects = [
  {
    name: "strava   ",
    description: "I did some strava",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  { name: "Automatic Emailer", description: "some text", link: "some link" },
  { name: "Stock Prices", description: "some text", link: "some link" },
];

export function Projects() {
  return (
    <>
      <div className="projects">
        <h2>The Projects</h2>
        <div class="projects-container">
          {projects.map((project, projectIndex) => (
            <a href={project.link} target="_blank">
                <button key={projectIndex} class="box">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </button>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
