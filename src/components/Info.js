import photo from "../images/IMG_E5563.jpg";
import mail from "../images/mail.svg";
import linkedin from "../images/linkedin.svg";

const Info = () => {
  const handleClick = () => {
    console.log(window.open);
    window.open(
      "https://www.linkedin.com/in/oksana-oberemok-792053215",
      "_blank"
    );
  };

  const handleEmail = () => {
    window.location.href = "mailto:pylypenkok@gmail.com";
  };

  return (
    <section className="info">
      <div className="container">
        <div className="profile-photo">
          <img src={photo} alt="my profile" />
        </div>
        <h1 className="main-title">Oksana Oberemok</h1>
        <h3 className="subtitle">Frontend Developer</h3>
        <div className="controls">
          <button className="btn" onClick={handleEmail}>
            <img src={mail} alt="mail icon" /> Email
          </button>

          <button
            className="btn another-color"
            onClick={handleClick}
            target="_blank"
          >
            <img src={linkedin} alt="linkedin icon" /> Linkedin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
