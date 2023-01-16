import { AiOutlinePlus } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import { useState } from 'react'

import './Body.css'

const AddItem = (props) => {
  const [input, setInput] = useState('')
  const [newItem, setNewItem] = useState({ title: '', completed: false })


  return (
    <div className='additem-container input-icons'>
      <AiOutlinePlus />
      <input
        value={input}
        onChange={(e) => {setInput(e.target.value)}} 
        className='input-field'
      />
      <i className='icon'>
        <BiSend size={20} />
      </i>
    </div>
  )
}

export default AddItem
