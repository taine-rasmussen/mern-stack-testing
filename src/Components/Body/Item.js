import { MdOutlineDoneAll } from 'react-icons/md'
import { useState } from 'react'
import axios from 'axios'

const Item = (props) => {
  const {
    item,
    item: {
      title,
      completed
    },
    onCompletedClick
  } = props;

  return (
    <div 
      key={title}
      className='body_item_container'
    >
      <div className='left_side_body'>
        <input 
          type='checkbox'
          className='item_checkbox'
        />
        {title}
      </div>
      <div className='right_side_body'>
        {completed ? 
          <MdOutlineDoneAll 
            size={20} 
            style={{color: 'green'}}
            className='item_tick' 
            onClick={() => { onCompletedClick(item)}}
          /> : 
          <MdOutlineDoneAll
            size={20}
            style={{ color: '#63666A '}}
            className='item_tick'
            onClick={() => {onCompletedClick(item)}}
          />}
      </div>
    </div>
  )
}

export default Item
