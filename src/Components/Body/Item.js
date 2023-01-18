import { useState } from 'react'
import './Body.css'

import LeftSideItemBody from './LeftSideItemBody'
import RightSideItemBody from './RightSideItemBody'

const Item = (props) => {
  const { item } = props;
  const { 
    _id,
    title
  } = item

  const [activeEdit, setActiveEdit] = useState(false)

  return (
    <div 
      key={_id}
      className='body_item_container'
    >
      <LeftSideItemBody
        activeEdit={activeEdit}
        title={title}
      />
      <RightSideItemBody
        item={item}
        setActiveEdit={setActiveEdit}
      />
    </div>
  )
}

export default Item
