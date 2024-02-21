import profilePhoto from "../../assets/Close-up-self.png";
import '../../style.css';

export default function Home() {
  return (
    <div class="container text-left">
      <div id="opening"class="row">
        <img class="col-6" id="welcome-image" src={profilePhoto} alt="welcome image of Nate"></img>
        <p class="col-6">
        Hi, my name is Nate McMahon and I am a software developer
        </p>
      </div>
    </div>
  );
}
