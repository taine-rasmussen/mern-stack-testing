import './Body.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import axios from 'axios';

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

  return (
    <div>
      BODY
      <div className="list-display">
        {items.map((item, i) => {
          return(
            <div key={item.title}>
              {item.title}
            </div>  
          )
        })}
      </div>
    </div>
  )
}

export default Body
