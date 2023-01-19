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
    item,
    items
  } = props;
  
  const { funcs, state } = useItems();
  const {
    updateItemStatus,
    deleteItem
  } = funcs
  const { 
    setItems
  } = state

  const updateStateAfterDelete = (del) => {
    deleteItem(item)
    const newList = items.filter((item) => item._id !== del._id)
    console.log(items, newList)
    setItems(newList)
    console.log('update?',items)
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
            onClick={() => { updateStateAfterDelete(item) }}
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
            onClick={() => { updateStateAfterDelete(item)}}
          />
      </>
    }
    </div>
  )
}

export default RightSideItemBody
