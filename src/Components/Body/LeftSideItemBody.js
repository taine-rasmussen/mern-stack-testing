import './Body.css'

const LeftSideItemBody = (props) => {

  const {
    activeEdit,
    title
  } = props;

  return (
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
  )
}

export default LeftSideItemBody
