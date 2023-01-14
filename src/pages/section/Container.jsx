import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Content } from "./Content";
import { addCard } from "../../Redux/Slice/card";

import "./Container.scss";

const Container = () => {
  const [data, setData] = useState(
    [...useSelector((state) => state.card.wallData)] || []
  );

  const dispatch = useDispatch();

  const handleAdd = (e, index, cardLength) => {
    dispatch(addCard({ index: index, id: uuidv4() }));
  };

  return (
    <div className="row wall-row">
      {data.map((m, index) => (
        <Content
          section_title={m.section_title}
          cards_data={m.cards_data || []}
          handleAdd={handleAdd}
          index={index}
        />
      ))}
    </div>
  );
};

export default Container;
