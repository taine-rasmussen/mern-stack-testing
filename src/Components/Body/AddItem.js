import { AiOutlinePlus } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import { useState } from 'react'
import axios from 'axios';


import './Body.css'

const AddItem = (props) => {
  const [input, setInput] = useState('')
  const [newItem, setNewItem] = useState({ title: '', completed: false })
  const [placeholderText, setPlaceholderTetxt] = useState('Add item')

  const updateList = () => {
    if(!input){
      return setPlaceholderTetxt('Enter item...')
    }

    setNewItem({...newItem}, newItem.title = input)
    axios.post("http://localhost:3001/createListItem", newItem)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    setNewItem({ title: '', completed: false })
    setInput('')
    setPlaceholderTetxt('Add item')
  }

  return (
    <div className='additem-container'>
      <AiOutlinePlus 
        size={20}
        onClick={updateList}
        className='icon'
      />
      <input
        type='text'
        placeholder={placeholderText}
        value={input}
        onChange={(e) => {setInput(e.target.value)}} 
        className='input-field'
      />
    </div>
  )
}

export default AddItem
