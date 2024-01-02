/* eslint-disable react/prop-types */

function ButtonUndo({children, ...rest}) {
  return (
    <button {...rest}>{children}</button>
  )
}

export default ButtonUndo