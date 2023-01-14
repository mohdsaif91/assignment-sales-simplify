import React, { useState } from 'react'
import { Content } from './Content'
import './Container.scss'

const Container = () => {
  const [data, setData] = useState([
    {
      id: 1,
      section_title: 'What Went Well',
      cards_data: [
        {
          id: '100',
          card_title: 'Release went well',
          score: '1',
          card_color: 'white',
        },
        {
          id: '101',
          card_title: 'Team Velocity was awesome',
          score: '2',
          card_color: 'white',
        },
        {
          id: '102',
          card_title: 'React Js Upgrade',
          score: '5',
          card_color: 'white',
        },
      ],
    },
  ])

  const handleAdd = (e, index) => {

    
  }
  return (
    <div className="row">
      <Content data={data} handleAdd={handleAdd} />
    </div>
  )
}

export default Container
