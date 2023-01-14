import React from "react";
import "./Cards.scss";

const Cards = ({ cardData }) => {
  return (
    <div class="cards-row">
      {cardData.length != 0 ? (
        cardData.map((item) => (
          <div class="cards-column">
            <div class="card">
              <h3>{item.card_title}</h3>
              <p>{item.score}</p>
              <p>{item.card_color}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center mt-4">Add New</div>
      )}

      {/* 
      <div class="cards-column">
        <div class="card">
          <h3>Card 2</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
      <div class="cards-column">
        <div class="card">
          <h3>Card 2</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
      <div class="cards-column">
        <div class="card">
          <h3>Card 2</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
      <div class="cards-column">
        <div class="card">
          <h3>Card 2</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
      <div class="cards-column">
        <div class="card">
          <h3>Card 2</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div> */}
    </div>
  );
};

export default Cards;
