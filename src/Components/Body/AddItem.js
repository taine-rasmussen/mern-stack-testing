import { AiOutlinePlus } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import { useState } from 'react'
import axios from 'axios';


import './Body.css'

const AddItem = (props) => {
  const [input, setInput] = useState('')
  const [newItem, setNewItem] = useState({ title: '', completed: false })

  const updateList = () => {
    if(!input)return;

    setNewItem({...newItem}, newItem.title = input)
    axios.post("http://localhost:3001/createListItem", newItem)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setNewItem({ title: '', completed: false })
    setInput('')
  }


  return (
    <div className='additem-container'>
      <AiOutlinePlus 
        size={25}
        onClick={updateList}
        className='icon'
      />
      <input
        placeholder='Add item'
        value={input}
        onChange={(e) => {setInput(e.target.value)}} 
        className='input-field'
      />
    </div>
  )
}

export default AddItem
