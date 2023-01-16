import './Body.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

import AddItem from './AddItem'
import Item from './Item'

const Body = () => {

  const [items, setItems] = useState([]);

  useEffect(
    () => {
      axios.get("http://localhost:3001/getList")
      .then((res) => {
        setItems(res.data)
      })
    }, [items]
  )

  // Input - capture users input for new item title - useState
  // Pass this input into a function that calls our post api to update the db
  // Default "completed" to false
  // Clear out saved input once api call is 200

  return (
    <div>
      BODY
      <div className="list-display">
        {items.map((item) => {
          return(
            <Item item={item} />
          )
        })}
      </div>
      <AddItem />
    </div>
  )
}

export default Body
