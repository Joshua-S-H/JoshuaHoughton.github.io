import "./WhoStyle.css";

export function Who() {
  return (
    <>
      <div className="who">
        <div className="whoText">
          <h2>Who Am I?</h2>
          <p>I'm 22 year old software / data engineer based in London <br></br>
          Masters in Systems engineering from the University of Warwick MEng<br></br>
          I Love lacrosse, running and doing cool stuff with data<br></br>
          Feel free to drop me a message on LinkedIn
          </p>
        </div>
        <div class="photo-collage">
          <img class="HeroTeam-Photo" src="src/assets/photos_of_me/HeroGroup.JPG" alt="HeroTeam Photo"  />
          <img class="HeadShot-Photo" src="src/assets/photos_of_me/Headshot.JPG" alt="HeadShot" />
          {/* <img class="photo photo1" src="src/assets/photos_of_me/GPTeam.JPG" alt="Photo of me" /> */}
          <img class="LacrosseTeam-Photo" src="src/assets/photos_of_me/lacrosseTeam.JPG" alt="LacrosseTeam Photo" />
        </div>
      </div>
    </>
  );
}
