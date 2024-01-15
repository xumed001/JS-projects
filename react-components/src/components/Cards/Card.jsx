/* eslint-disable react/prop-types */

function Cards({ icon, title, text }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card--icon--container">
          {icon}
        </div>
        <div className="card--content">
          <div className="card--title">{title}</div>
          <div className="card--text">{text}</div>
        </div>
      </div>
    </div>
  )
}

export default Cards