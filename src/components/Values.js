import images from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GrDiamond } from "react-icons/gr";
import { values } from "../data";
import Card from "../UI/Card";
const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={images} alt="Values Image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GrDiamond />} title="Values" />
          <p className="values__right__p">
            Lorem ipsum dolor sit amet,consectetur adipisciing elit.Officiis
            quidem aperiam sapiente.
            </p>
            <div className="values__wrapper">
                {
                    values.map(({id,icon,title,desc})=>{
                        return <Card key={id} className="values__value">
                               <span>{icon}</span>
                               <h4>{title}</h4>
                               <small>{desc}</small>
                        </Card>
                    })
                }
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Values;
