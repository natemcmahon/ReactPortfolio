import GmailIcon from "../../../src/assets/gmail-icon.png";
import LinkedInIcon from "../../../src/assets/linkedIn-icon.png";


export default function Contact() {
  return (
    <div>
      <br/><br/>
      <p>
        Feel free to reach out to me via email or LinkedIn with any career opportunities!
      </p>
      <div id="logo-row" class="row">
        <div class="col-1">
          <img class="contact-logo" src={GmailIcon} alt="Gmail Logo"></img>
        </div>
        <a href="https://www.linkedin.com/in/nate-mcmahon-901aab13b/" class="col-1">
          <img class="contact-logo" src={LinkedInIcon} alt="LinkedIn Logo"></img>
        </a>
      </div>
      <p>nate.mcmahon47@gmail.com</p>
    </div>
  )
}