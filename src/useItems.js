import { useState, useCallback } from 'react'
import axios from 'axios'

const useItems = () => {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', completed: false });

  const {
    completed,
    title,
    _id
  } = items || {}

  
  const updateItemStatus = (id) => {
    axios.put("http://localhost:3001/updateItemStatus", {
      id: id,
      completed: !completed
    })
  };

  const getItems = useCallback(
    () => {
      axios.get("http://localhost:3001/getList")
        .then((res) => {
          setItems(res.data)
        })
    },
    [items],
  )

  const funcs = {
    getItems,
    updateItemStatus
  };

  const state = {
    setNewItem,
    newItem,
    items,
  };

  return { state, funcs }
}

export default useItems;