import React from "react";
import ai from "../assets/pic/hero.png";
import "./header.css";
import { SectionWrapper } from "../hoc";


const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text pt-7 ">
        We provide what you need, <br/> We provide what you belive in Sisnovate.
      </h1>
      {/* <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p> */}

      <div className="gpt3__header-content__input ">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

  
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default SectionWrapper(Header, "");