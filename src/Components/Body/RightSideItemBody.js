import { MdOutlineDoneAll, MdDeleteForever, MdOutlineRemoveDone } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import useItems from '../../useItems'
import './Body.css'


const RightSideItemBody = (props) => {

  const {
    item: {
      completed,
      _id
    },
    setActiveEdit,
    activeEdit,
    item,
    items
  } = props;
  
  const { funcs, state } = useItems();
  const {
    deleteItem
  } = funcs
  const { 
    setItems
  } = state

  const updateStateAfterDelete = (del) => {
    deleteItem(item)
    const newList = items.filter((item) => item._id !== del._id)
    setItems(newList)
  }

  return (
    <div className='right_side_body'>
      {completed ?
      <>
          <AiFillEdit
            size={30}
            style={{ color: '#63666A ' }}
            className='item_tick'
            onClick={() => {setActiveEdit(!activeEdit)}}
          />
          <MdDeleteForever
            size={30}
            style={{ color: '#63666A ' }}
            className='item_tick'
            onClick={() => { updateStateAfterDelete(item) }}
          />
      </> : 
      <>
          <AiFillEdit
            size={30}
            style={{ color: '#63666A ' }}
            className='item_tick'
            onClick={() => setActiveEdit(!activeEdit)}
          />
          <MdDeleteForever
            size={30}
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
