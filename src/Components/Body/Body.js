import './Body.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

import AddItem from './AddItem'
import Item from './Item'

const Body = () => {

  const [items, setItems] = useState([]);
  const [updateItem, setUpdateItem] = useState({ title: '', completed: false })


  const onCompletedClick = (item) => {
    if (!item.completed) {
      setUpdateItem({ ...updateItem }, updateItem.completed = true)
    }
    axios.put("http://localhost:3001/updateItem", updateItem)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(
    () => {
      axios.get("http://localhost:3001/getList")
      .then((res) => {
        setItems(res.data)
      })
    }, [items]
  )

  return (
    <div className='body_container'>
      <div className="list_display">
        {items.map((item) => {
          return(
            <Item 
              item={item}
              onCompletedClick={onCompletedClick}
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
