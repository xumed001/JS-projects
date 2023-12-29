/* eslint-disable react/prop-types */

function ButtonUndo({children, undoClick, disabled}) {
  return (
    <button onClick={undoClick} disabled={disabled == 0}>{children}</button>
  )
}

export default ButtonUndo