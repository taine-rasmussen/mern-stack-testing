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

  const getItems = () => {
    axios.get("http://localhost:3001/getList")
      .then((res) => {
        setItems(res.data)
      })
  }

  const deleteItem = (item) => {
    axios.delete("http://localhost:3001/deleteItem", {
      data: item
    }).then(() => getItems())
      .then(res => console.log('adasdf',res.body))
      .catch(err => console.log(err))
  }

  const addNewItemToList = async (input) => {
    setNewItem({ ...newItem }, newItem.title = input)
    await axios.post("http://localhost:3001/createListItem", newItem)
      .then(res => console.log(res))
      .then(() => getItems())
      .catch(err => console.log(err))
    setNewItem({ title: '', completed: false })
  }

  const funcs = {
    updateItemStatus,
    addNewItemToList,
    deleteItem,
    getItems
  };

  const state = {
    setNewItem,
    newItem,
    setItems,
    items
  };

  return { state, funcs }
}

export default useItems;