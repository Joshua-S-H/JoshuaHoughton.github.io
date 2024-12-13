import "./ProjectsStyle.css";

const projects = [
  {
    name: "Strava Data Analysis",
    description: "Analyitcs of Strava data including gaining insights on progresion and key influencers of performance Interact with API",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  { 
    name: "Digital Assistant", 
    description: "Imagine throughout your week a number of data points were taken and then the key insights of your week are emailed to you automatically in a report which you can read on the tube.", 
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  },
  { 
    name: "Automatic Investing", 
    description: "This project uses ANN and ML to automatically invest in stocks", 
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  },
];

export function Projects() {
  return (
    <>
      <div id="projects" className="projects">
        <h2>Projects</h2>
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
