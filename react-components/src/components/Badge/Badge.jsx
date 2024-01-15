/* eslint-disable react/prop-types */

function Badge({children, className, ...rest }) {

  return (
    <button className={`badge ${className}`} {...rest}>
        { children }
    </button>
  )
}

export default Badge