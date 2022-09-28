import facebook from "../images/facebook.svg";
import insta from "../images/insta.svg";
import github from "../images/github.svg";
import youtube from "../images/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="social-link"
        href="https://www.facebook.com/kseniya.pylypenko"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        className="social-link"
        href="https://www.instagram.com/phialkovi_ochi"
      >
        <img src={insta} alt="instagram" />
      </a>
      <a className="social-link" href="https://github.com/oberemok-oksana">
        <img src={github} alt="github" />
      </a>
      <a
        className="social-link youtube"
        href="https://www.youtube.com/channel/UCZNdQO5XJV9JUiQNfPsLZnQ"
      >
        <img src={youtube} alt="youtube" />
      </a>
    </footer>
  );
};

export default Footer;
