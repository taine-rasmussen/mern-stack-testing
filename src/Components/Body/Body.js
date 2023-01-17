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
    }, []
  )

  return (
    <div className='body_container'>
      <div className="list_display">
        {items.map((item) => {
          return(
            <Item 
              item={item}
            />
          )
        })}
      </div>
      <div className='body_footer'>
        <AddItem 
          items={items}
        />
      </div>
    </div>
  )
}

export default Body
