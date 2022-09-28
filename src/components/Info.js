import photo from "../images/IMG_E5563.jpg";
import mail from "../images/mail.svg";
import linkedin from "../images/linkedin.svg";

const Info = () => {
  return (
    <section>
      <div className="container">
        <div className="profile-photo">
          <img src={photo} alt="my profile" />
        </div>
        <h1 className="main-title">Oksana Oberemok</h1>
        <h3 className="subtitle">Frontend Developer</h3>
        <div className="controls">
          <button className="btn">
            <img src={mail} alt="mail icon" /> Email
          </button>
          <button className="btn another-color">
            <img src={linkedin} alt="linkedin icon" /> Linkedin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
