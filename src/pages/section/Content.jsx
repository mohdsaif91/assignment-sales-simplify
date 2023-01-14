import React from "react";
import { CiCirclePlus } from "react-icons/ci";

import Cards from "../../component/card/Cards";

export const Content = ({ section_title, cards_data, index, handleAdd }) => {
  return (
    <div className="column">
      <div className="heading align-item-center">
        <h2 className="container-title">{section_title}</h2>
        <span
          className="c-p add-icon"
          onClick={(e) => handleAdd(e, index, cards_data.length)}
        >
          <CiCirclePlus size={30} />
        </span>
      </div>
      <div className="cards-container">
        <Cards cardData={cards_data} />
      </div>
    </div>
  );
};
