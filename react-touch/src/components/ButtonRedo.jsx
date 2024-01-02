/* eslint-disable react/prop-types */

function ButtonRedo({children, ...rest}) {
  return (
    <button {...rest}>{children}</button>
  )
}

export default ButtonRedo
