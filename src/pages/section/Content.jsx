import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import Cards from '../../component/card/Cards'

export const Content = ({ data, handleAdd }) => {
  return data.map((item, index) => (
    <div className="column">
      <div className="heading align-item-center">
        <h2 className="title">{item.section_title}</h2>
        <span className="icon" onClick={(e) => handleAdd(e, index)}>
          <CiCirclePlus size={30} />
        </span>
      </div>
      <div className="cards-container">
        <Cards cardData={item.cards_data} />
      </div>
    </div>
  ))
}
