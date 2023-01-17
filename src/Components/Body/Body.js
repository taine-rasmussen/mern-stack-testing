import './Body.css'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import AddItem from './AddItem'
import Item from './Item'

const Body = () => {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', completed: false })

  const {
    completed
  } = items || {}
  
  const getItems = () => {
    axios.get("http://localhost:3001/getList")
      .then((res) => {
        setItems(res.data)
      })
  }

  const updateItemStatus = (id) => {
    axios.put("http://localhost:3001/updateItemStatus", {
      id: id,
      completed: !completed
    }).clone()
    .then( () => {
      getItems()
    })
  };

  useEffect(
    () => {
      getItems()
    }, []
  )

  return (
    <div className='body_container'>
      <div className="list_display">
        {items.map((item) => {
          return(
            <Item 
              item={item}
              updateItemStatus={updateItemStatus}
              getItems={getItems}
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
