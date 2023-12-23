import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MisionImage from "../../images/about3.jpg";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet,consectetur adipisciing elit.Eos consectetur
        sint placeat nam, quo reprehenderit eligendi molestias?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="StoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit. Mairores
              fugit an neque quo, quas eius quam at sunt quod in atque nulla
              minus nam impedit tempore consectetur ese quibusdam voluptatum
              optio nemo! Aperiam veritatis delectus commodi. Minima tempora
              voluptates natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.laboriosam
              harum corruppti quas voluptate, perferendis consectetur veritatiss
              veniam, ratione, disstinctio iste dignissios alias ipsum minina
              consecquutur?
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, disstinctio
              iste dingissimos alias ipsum minima consecquutur?
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit. Mairores
              fugit an neque quo, quas eius quam at sunt quod in atque nulla
              minus nam impedit tempore consectetur ese quibusdam voluptatum
              optio nemo! Aperiam veritatis delectus commodi. Minima tempora
              voluptates natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.laboriosam
              harum corruppti quas voluptate, perferendis consectetur veritatiss
              veniam, ratione, disstinctio iste dignissios alias ipsum minina
              consecquutur?
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, disstinctio
              iste dingissimos alias ipsum minima consecquutur?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="VisionImage" />
          </div>
        </div>
      </section>
      <section className="about__mision">
        <div className="container about__mision-container">
          <div className="about__section-image">
            <img src={MisionImage} alt="MisionImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Mision</h1>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit. Mairores
              fugit an neque quo, quas eius quam at sunt quod in atque nulla
              minus nam impedit tempore consectetur ese quibusdam voluptatum
              optio nemo! Aperiam veritatis delectus commodi. Minima tempora
              voluptates natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.laboriosam
              harum corruppti quas voluptate, perferendis consectetur veritatiss
              veniam, ratione, disstinctio iste dignissios alias ipsum minina
              consecquutur?
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, disstinctio
              iste dingissimos alias ipsum minima consecquutur?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
