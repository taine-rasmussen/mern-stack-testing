import './Body.css'
import { useEffect } from 'react'
import AddItem from './AddItem'
import Item from './Item'
import useItems from '../../useItems'

const Body = () => {

  const { state, funcs } = useItems();

  const {
    items,
    newItem,
    setNewItem
  } = state

  const {
    getItems,
    updateItemStatus
  } = funcs

  useEffect(
    () => {
      getItems()
    }, []
  )

  return (
    <div className='body_container'>
      <div className="list_display">
        {items.map((item) => {
          return(
            <Item 
              item={item}
              updateItemStatus={updateItemStatus}
              getItems={getItems}
            />
          )
        })}
      </div>
      <div className='body_footer'>
        <AddItem 
          items={items}
          newItem={newItem}
          setNewItem={setNewItem}
          getItems={getItems}
        />
      </div>
    </div>
  )
}

export default Body
