import './Header.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
  return (
    <div className="header_container">
      <AiFillCheckCircle size={25} />
      ToDo
      <IoMdClose size={25} />
    </div>
  )
}

export default Header;
