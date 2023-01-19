import { MdOutlineDoneAll, MdDeleteForever, MdOutlineRemoveDone } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { useEffect } from 'react'
import useItems from '../../useItems'
import './Body.css'


const RightSideItemBody = (props) => {

  const {
    item: {
      completed,
      _id
    },
    setActiveEdit,
    item
  } = props;
  
  const { funcs, state } = useItems();
  const {
    updateStateAfterDelete,
    updateItemStatus,
    deleteItem
  } = funcs
  const { 
    items
  } = state

  const handleDelete = (item) => {
    console.log(items, item)
    updateStateAfterDelete(item)
    deleteItem(item)
  }

  return (
    <div className='right_side_body'>
      {completed ?
      <>
          <MdOutlineDoneAll
            size={20}
            style={{ color: 'green' }}
            className='item_tick'
            onClick={() => {updateItemStatus(_id)}}
          />
          <AiFillEdit
            size={20}
            style={{ color: '#63666A ' }}
            className='item_tick'
            onClick={() => {setActiveEdit(true)}}
          />
          <MdDeleteForever
            size={20}
            style={{ color: '#63666A ' }}
            className='item_tick'
            onClick={() => { handleDelete(item) }}
          />
      </> : 
      <>
          <MdOutlineRemoveDone
            size={20}
            style={{ color: '#63666A ' }}
            className='item_tick'
            onClick={() => { updateItemStatus(_id) }}
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
            onClick={() => { handleDelete(item)}}
          />
      </>
    }
    </div>
  )
}

export default RightSideItemBody
