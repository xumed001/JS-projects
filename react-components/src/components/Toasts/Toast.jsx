/* eslint-disable react/prop-types */
//import ReactDOM from 'react-dom'
import Banners from "../Banners/Banner"

function Toast({ open, title }) {
    if (title == '') return

    const status = title.toLowerCase()
    const displayText = () => {
        switch (status) {
            case 'success':
                return 'Your work has been saved'
            case 'warning':
                return 'A network error was detected'
            case 'error':
                return 'Please re-save your work again'
            case 'info':
                return 'Please read updated information'
        }
    }

  return (
    <>
        {open && 
        <Banners 
            status={status}
            title={title} 
            text={displayText()}
        />}
    </>
  )
}

export default Toast