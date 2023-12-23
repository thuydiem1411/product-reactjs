import "./new.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
const New = () => {
  const newLength = 15;
  const images = [];
  for (let i = 1; i < newLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  console.log(images);
  return (
    <>
      <Header title="Out New" image={HeaderImage}>
        Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam,
        architecto nustrum nobis,est,deserunt odio possimus inventore eveniet
        ilum perspiciatis.
      </Header>
      <section className="new">
        <div className="container new__container">
          {images.map((images, index) => {
            return (
              <article key={index}>
                <img src={images} alt={` New Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default New;
