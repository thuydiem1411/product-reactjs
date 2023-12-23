import "./product.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";
const Product = () => {
  return (
    <>
      <Header title="Out Trainer" image={HeaderImage}>
        Facilis,iusto numquam undelaboriosam expedita qui exercitationem?Dicta
        vero accusantium est aut molestiae fugit doloremque suscipit quod.
      </Header>
      <section className="trainer">
        <div className="container trainer__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <AiFillTwitterCircle />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Product;
