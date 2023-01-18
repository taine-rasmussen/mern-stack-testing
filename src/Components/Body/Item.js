import { useState } from 'react'

import LeftSideItemBody from './LeftSideItemBody'
import RightSideItemBody from './RightSideItemBody'

const Item = (props) => {
  const { item } = props;
  const { _id } = item

  const [activeEdit, setActiveEdit] = useState(false)

  return (
    <div 
      key={_id}
      className='body_item_container'
    >
      <LeftSideItemBody />
      {/* <div className='left_side_body'>
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
      </div> */}
      <div className='right_side_body'>
          <RightSideItemBody
            item={item}
            setActiveEdit={setActiveEdit}
          />
      </div>
    </div>
  )
}

export default Item
