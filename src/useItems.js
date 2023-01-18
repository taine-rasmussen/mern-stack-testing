import { useState, useCallback } from 'react'
import axios from 'axios'

const useItems = () => {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', completed: false });

  const {
    completed
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

  const addNewItemToList = async (input) => {
    setNewItem({ ...newItem }, newItem.title = input)
    await axios.post("http://localhost:3001/createListItem", newItem)
      .then(res => console.log(res))
      .then(() => getItems())
      .catch(err => console.log(err))
    setNewItem({ title: '', completed: false })
  }

  const funcs = {
    getItems,
    updateItemStatus,
    addNewItemToList
  };

  const state = {
    setNewItem,
    newItem,
    items,
  };

  return { state, funcs }
}

export default useItems;