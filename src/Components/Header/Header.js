import './Header.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
  return (
    <div className="header_container">
      <AiFillCheckCircle size={30} />
      ToDo
      <IoMdClose size={30} />
    </div>
  )
}

export default Header;
