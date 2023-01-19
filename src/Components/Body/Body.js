import './Body.css'
import { useEffect } from 'react'
import AddItem from './AddItem'
import Item from './Item'
import useItems from '../../useItems'

const Body = () => {

  const { state, funcs } = useItems();
  const { getItems } = funcs
  const { 
    items,
    newItem,
    setNewItem
  } = state

  useEffect(
    () => {
      getItems()
    }, []
  )

  console.log(items)

  // insta sort completed to  bottom of list

  return (
    <div className='body_container'>
      <div className="list_display">
        {items.map((item) => {
          return(
            <Item 
              item={item}
              items={items}
            />
          )
        })}
      </div>
      <div className='body_footer'>
        <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          getItems={getItems}
        />
      </div>
    </div>
  )
}

export default Body
