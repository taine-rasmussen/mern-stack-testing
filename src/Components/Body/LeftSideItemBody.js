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
  const { updateItemStatus } = funcs

  const handleClick = () => {
    updateItemStatus(_id, completed)
    setActiveEdit(!activeEdit)
  }

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
