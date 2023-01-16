import { AiOutlinePlus } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import { useState } from 'react'
import axios from 'axios';


import './Body.css'

const AddItem = (props) => {
  const [input, setInput] = useState('')
  const [newItem, setNewItem] = useState({ title: '', completed: false })

  const updateList = () => {
    setNewItem({...newItem}, newItem.title = input)
    axios.post("http://localhost:3001/createListItem", newItem)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setNewItem({ title: '', completed: false })
    setInput('')
  }


  return (
    <div className='additem-container input-icons'>
      <AiOutlinePlus />
      <input
        value={input}
        onChange={(e) => {setInput(e.target.value)}} 
        className='input-field'
      />
      <i className='icon'>
        <BiSend 
          size={20}
          onClick={updateList}
        />
      </i>
    </div>
  )
}

export default AddItem
