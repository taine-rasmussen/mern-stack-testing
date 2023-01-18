import { AiOutlinePlus } from 'react-icons/ai'
import { useState, useCallback } from 'react'
import axios from 'axios';

import './Body.css'

const AddItem = (props) => {
  const {
    newItem,
    setNewItem,
    getItems
  } = props;

  const [input, setInput] = useState('')
  const [placeholderText, setPlaceholderTetxt] = useState('Add item')

  const updateList = useCallback(
    () => {
      if(input.length == 0) return setPlaceholderTetxt('Enter item...');
      setNewItem({...newItem}, newItem.title = input)
      axios.post("http://localhost:3001/createListItem", newItem)
      .then(res => console.log(res))
      .catch(err => console.log(err))
        .then(() => getItems())
      setNewItem({ title: '', completed: false })
      setInput('')
      setPlaceholderTetxt('Add item')
    }, [input, newItem]
  );

  return (
    <div className='additem-container'>
      <AiOutlinePlus 
        size={20}
        onClick={() => {updateList()}}
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
