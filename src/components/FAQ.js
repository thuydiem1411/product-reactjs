import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <acticle className="faq">
      <div>
        <h4>{question}</h4>
        <button className="faq__icon" onClick={()=>setIsAnswerShowing(prev =>!prev)}>
          {
            isAnswerShowing ? <AiOutlineMinusCircle /> :<AiOutlinePlus />
          }
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </acticle>
  );
};

export default FAQ;
