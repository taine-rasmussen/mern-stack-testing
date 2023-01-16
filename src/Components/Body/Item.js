const Item = (props) => {
  const {
    item: {
      title,
      completed
    }
  } = props;

  return (
    <div key={title}>
      {title}
    </div>
  )
}

export default Item
