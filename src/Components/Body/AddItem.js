import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

import './Body.css'

const AddItem = (props) => {
  const [input, setInput] = useState('')

  return (
    <div className='additem-container'>
      <AiOutlinePlus />
      <input
        value={input}
        onChange={(e) => {setInput(e.target.value)}} 
      />
    </div>
  )
}

export default AddItem
