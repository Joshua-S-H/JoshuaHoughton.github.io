import './FooterStyle.css'

export function Footer(){
    return(
        <>
        <footer>
           
            <div className="footer-section">
                <div className="about-section">
                    <h3>About</h3>
                    <p>Just some peeps trying to do some code, if you want to give us a job checkout the links to your right</p>
                </div>
                
                <div>    
                    <div className="socials-section">
                        <p>Joshua Houghton</p>
                        {/* <div className="social-icons-container">
                            <a href="https://github.com/Joshua-S-H"><img src="src/assets/github.jpeg" className="icon-style" alt="Github icon"  /></a>
                            <a href="mailto:joshua.s.houghton@gmail.com"><img src="src/assets/email.jpeg" className="icon-style" alt="Github icon"  /></a>
                            <a href="https://www.linkedin.com/in/joshua-houghton-b1b9061a6/"><img src="src/assets/dark_linkedin.png" className="icon-style" alt="Github icon"  /></a>
                        </div> */}
                        
                    </div>
                </div>
                
            </div>
        </footer>
        </>
    )
}