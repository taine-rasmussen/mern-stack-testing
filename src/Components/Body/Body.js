import './Body.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

import AddItem from './AddItem'
import Item from './Item'

const Body = () => {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', completed: false })
  const [loading, setLoading] = useState(false)

  useEffect(
    () => {
      axios.get("http://localhost:3001/getList")
      .then((res) => {
        setItems(res.data)
      })
    }, [newItem, setItems, items]
  )

  return (
    <div className='body_container'>
      <div className="list_display">
        {items.map((item) => {
          return(
            <Item 
              item={item}
              setLoading={setLoading}
              loading={loading}
            />
          )
        })}
      </div>
      <div className='body_footer'>
        <AddItem 
          items={items}
          newItem={newItem}
          setNewItem={setNewItem}

        />
      </div>
    </div>
  )
}

export default Body
