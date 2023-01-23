import { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import useItems from '../../useItems'
import './Body.css'

const LeftSideItemBody = (props) => {

  const {
    setActiveEdit,
    activeEdit,
    completed,
    title,
    _id
  } = props;

  const { funcs } = useItems();
  const { updateItemStatus, updateItem } = funcs

  const [input, setInput] = useState('')

  const handleClick = () => {
    updateItem(input)
    setActiveEdit(!activeEdit)
    setInput('')
  }

  console.log(input)

  return (
    <div className='left_side_body'>
      <input
        type='checkbox'
        className='item_tick item_checkbox'
        onClick={() => { updateItemStatus(_id, completed) }}
      />
      {activeEdit ?
        (
          <> 
            <input
              type='text'
              placeholder='New item...'
              className='edit_input'
              value={input}
              onChange={(e) => { setInput(e.target.value)}}
            />
            <IoMdSend
              size={30}
              style={{ color: '#63666A ' }}
              className='item_tick'
              onClick={() => { handleClick() }}
            />
          </>
        ) : (
          <div className='item_edit'>
            {title}
          </div>
        )}
    </div>
  )
}

export default LeftSideItemBody
