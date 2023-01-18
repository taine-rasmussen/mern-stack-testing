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
    setActiveEdit
  } = props;
  
  const { funcs } = useItems();
  const {
    updateItemStatus
  } = funcs

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
          />
      </>
    }
    </div>
  )
}

export default RightSideItemBody
