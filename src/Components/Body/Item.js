import { useState } from 'react'
import './Body.css'

import RightSideItemBody from './RightSideItemBody'
import LeftSideItemBody from './LeftSideItemBody'

const Item = (props) => {
  const { item, items } = props;
  const { 
    completed,
    title,
    _id
  } = item

  const [activeEdit, setActiveEdit] = useState(false)

  return (
    <div 
      key={_id}
      className='body_item_container'
    >
      <LeftSideItemBody
        setActiveEdit={setActiveEdit}
        activeEdit={activeEdit}
        completed={completed}
        title={title}
        _id={_id}
        />
      <RightSideItemBody
        setActiveEdit={setActiveEdit}
        activeEdit={activeEdit}
        items={items}
        item={item}
      />
    </div>
  )
}

export default Item
