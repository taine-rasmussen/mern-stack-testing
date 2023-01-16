

const Item = (props) => {
  const {
    item: {
      title,
      completed
    }
  } = props;

  return (
    <div>
      {title}
    </div>
  )
}

export default Item
