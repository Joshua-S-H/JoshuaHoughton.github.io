import './FooterStyle.css'

export function Footer(){
    return(
        <>
        <footer>
           
            <div id="projects" className="footer-section">
                <div className="about-section">
                    {/* <h3>About</h3> */}
                    {/* <p>Write this about. Open to work</p> */}
                </div>
                
                <div>    
                    <div className="socials-section">
                        <h3>Contacts | </h3>
                        <div className="social-icons-container">
                            <a href="https://www.linkedin.com/in/joshua-houghton-b1b9061a6/"><img src="src/assets/dark_linkedin.png" className="icon-style" alt="Github icon"  /></a>
                            <a href="https://github.com/Joshua-S-H"><img src="src/assets/github.jpeg" className="icon-style" alt="Github icon"  /></a>
                            <a href="mailto:joshua.s.houghton@gmail.com"><img src="src/assets/email.jpeg" className="icon-style" alt="Github icon"  /></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
        </>
    )
}