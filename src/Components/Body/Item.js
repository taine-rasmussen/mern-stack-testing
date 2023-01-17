import { MdOutlineDoneAll, MdDeleteForever, MdOutlineRemoveDone } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios'

const Item = (props) => {
  const {
    item
  } = props;

  const {
    title,
    completed,
    _id
  } = item;

  const updateItemStatus = (id) => {
    axios.put("http://localhost:3001/updateItemStatus", {
      id: id,
      completed: !completed
    })
  };

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
        {title}
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
