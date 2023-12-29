/* eslint-disable react/prop-types */

function ButtonRedo({children, redoClick, disabled}) {
  return (
    <button onClick={redoClick} disabled={disabled == 0}>{children}</button>
  )
}


export default ButtonRedo
