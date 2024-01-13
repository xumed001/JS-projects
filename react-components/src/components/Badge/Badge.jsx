/* eslint-disable react/prop-types */

function Badge({children, className, ...rest }) {
  console.log()
  return (
    <button className={`badge ${className}`} {...rest}>
        { children }
    </button>
  )
}

export default Badge