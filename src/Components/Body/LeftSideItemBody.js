import useItems from '../../useItems'
import './Body.css'

const LeftSideItemBody = (props) => {

  const {
    activeEdit,
    completed,
    title,
    _id
  } = props;

  const { funcs } = useItems();
  const { updateItemStatus } = funcs

  return (
    <div className='left_side_body'>
      <input
        type='checkbox'
        className='item_tick item_checkbox'
        onClick={() => { updateItemStatus(_id, completed) }}
      />
      {activeEdit ?
        (<input
          type='text'
          placeholder='heheh'
          className='edit_input'
        />) : (
          <div className='item_edit'>
            {title}
          </div>
        )}
    </div>
  )
}

export default LeftSideItemBody
