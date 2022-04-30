import mailLogo from "../../assets/svgs/gmail-logo.svg";
import "./contact.scss";

const Contact = () => {
  return (
    <div id="Contact" className="contact section container">
      <div className="contact-desc">
        <p className="section-title">Contact</p>
        <h2>Contact</h2>
      </div>
      <div className="contact-forms">
        <a
          href="mailto: hectorllorca7@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mailLogo} />
          <div>
            <p>Email</p>
            <p>hectorllorca7@gmail.com</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/hector-llorca/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          <div>
            <p>Linkedin</p>
            <p>linkedin.com/in/hector-llorca/</p>
          </div>
        </a>
        <a href="https://github.com/Zoor7" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <div>
            <p>Github</p>
            <p>github.com/Zoor7</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
