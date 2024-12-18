import './HeaderStyle.css'

export function Header({ setCurrentPage }){
    return (
        <>  
            <div className ="header">
                <div className="title_container">
                    <h1>Joshua Houghton</h1>
                    <h3>Software Engineer / Data Analyst</h3>
                </div>

                <div className="title_clicks">
                <div className="nav_bar">
                    <a href = "#projects">
                        <h3>Projects</h3>
                    </a>
                    <a href = "#skills">
                        <h3>Skills</h3>
                    </a>
                </div>

                <div className="socials-section">
                    {/* <h3>Contacts | </h3> */}
                    <div className="social-icons-container">
                        <a target="_blank" href="https://www.linkedin.com/in/joshua-houghton-b1b9061a6/"  ><img src="src/assets/dark_linkedin.png" className="icon-style" alt="LinkedIn icon"  /></a>
                        <a target="_blank" href="https://github.com/Joshua-S-H"                           ><img src="src/assets/github.jpeg"       className="icon-style" alt="GitHub icon"    /></a>
                        <a target="_blank" href="mailto:joshua.s.houghton@gmail.com"                      ><img src="src/assets/email.jpeg"        className="icon-style" alt="Email icon"     /></a>
                    </div>
                </div>
                </div>

                {/* <div className="authors -rotate-3 transition-all hover:scale-125 hover:-rotate-1">
                    
                    <p>Sections | Contact (make this into a drop down)</p>
                </div> */}
            </div>

            
        </>
    )
}