/* eslint-disable react/prop-types */
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

function Banners({ status, title, text }) {
  const displayIcon = () => {
    switch (status) {
        case 'success':
            return <FaCheckCircle className="icon" />
        case 'warning':
            return <FaExclamationTriangle className="icon" />
        case 'error':
            return <FaCircleXmark className="icon" />
        case 'info':
            return <FaInfoCircle className="icon" />
    }
  }

  return (
    <div className={`banner ${status}`}>
        {displayIcon()}
        <div className="banner-content">
            {title && <div className="title">{title}</div>}
            {text && <div className="text">{text}</div>}
        </div>
    </div>
  )
}

export default Banners