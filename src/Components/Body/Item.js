import { MdOutlineDoneAll, MdDeleteForever, MdOutlineRemoveDone } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { useState } from 'react'

const Item = (props) => {
  const {
    item,
    updateItemStatus,
    getItems
  } = props;

  const {
    title,
    completed,
    _id
  } = item;

  const [activeEdit, setActiveEdit] = useState(false)

  return (
    <div 
      key={_id}
      className='body_item_container'
    >
      <div className='left_side_body'>
        <input 
          type='checkbox'
          className='item_checkbox'
        />
        {activeEdit ?
        (<input 
          type='text'
          placeholder='heheh'
        />) : (
          title
        )}
      </div>
      <div className='right_side_body'>
        {completed ?
          <>
            <MdOutlineDoneAll 
              size={20} 
              style={{color: 'green'}}
              className='item_tick' 
              onClick={() => { updateItemStatus(_id)}}
            /> 
            <AiFillEdit
              size={20}
              style={{ color: '#63666A ' }}
              className='item_tick'
              onClick={() => setActiveEdit(true)}
            />
            <MdDeleteForever 
              size={20}
              style={{ color: '#63666A ' }}
              className='item_tick'
            />
          </> :
          <>
            <MdOutlineRemoveDone
              size={20}
              style={{ color: '#63666A '}}
              className='item_tick'
              onClick={() => {updateItemStatus(_id)}}
            />
            <AiFillEdit
              size={20}
              style={{ color: '#63666A ' }}
              className='item_tick'
              onClick={() => setActiveEdit(true)}
            />
            <MdDeleteForever
              size={20}
              style={{ color: '#63666A ' }}
              className='item_tick'
            />
          </>
        }
      </div>
    </div>
  )
}

export default Item
