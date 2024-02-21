import '../../style.css';
import PwaImage from "../../../src/assets/JATEscreenshot.png";
import VanMosaic from "../../../src/assets/VanMosaic.png";

export default function Portfolio() {
  return (
    <div>
      <br/>
      <h3>Check out some of my recent projects!</h3>
      <br/>
      <div class="container text-center">
        <div class="row">
          <div class="col past-project">
            <img class="project-screenshot" id="PWA-image" src={PwaImage} alt="screenshot of PWA project"></img>
            <p>JATE is a text editor which runs in the browser. It is a single page Progressive Web App. It uses IndexedDB to get and store data. It works on or offline!</p>
          </div>
          <div class="col past-project">
            <img class="project-screenshot" id="VM-image" src={VanMosaic} alt="screenshot of picture sharing project"></img>
            <p>VANMosaic is an image sharing app which allows the user to upload images to their profile and see images posted by other users. It has a homepage which displays images posted recently by others. VANMosaic allows users to view recently posted images without logging in/signing up, but requires an account to post new images. Van Mosaic validates user credentials upon logging in and ties posts to the corresponding poster.</p>
          </div>
        </div>
        <div class="row">
          <div class="col past-project">
            Coming soon!
          </div>
          <div class="col past-project">
            Coming soon!
          </div>
          <div class="col past-project">
            Coming soon!
          </div>
        </div>
      </div>
    </div>
  );
}
