import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
  return (
    <>
      <div>
        <Header title="Get In Touch" image={HeaderImage}>
         Fruga itque ducimus,ad amet praesentium susscipit sit,assumenda nihil
         officia totam, animi culpa nobis nemo natus doloremque? 
         </Header>
      </div>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:thuydiem14112002@gmai.com"
              target="blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me"
              target="blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me+84379673985"
              target="blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
