const Item = (props) => {
  const {
    item: {
      title,
      completed
    }
  } = props;

  return (
    <div 
      key={title}
      className='body_item_container'
    >
      <input 
        type='checkbox'
        className='item_checkbox'
      />
      {title}
    </div>
  )
}

export default Item
