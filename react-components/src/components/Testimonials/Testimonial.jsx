/* eslint-disable react/prop-types */
import { FaQuoteLeft } from "react-icons/fa";

function Testimonial({ img, alt, text, fullName, position }) {
  return (
    <div className="test--container">
        <div className="test--plate"></div>
        <picture>
            <source 
                srcSet={img.catImg}
                media="(min-width: 800px)"
            />
            <img className='test--cat' src={img.smCatImg} alt={alt} />
        </picture>
        <div className="test--content">
            <FaQuoteLeft className="test--quote-icon" />
            <p className="test--text">{text}</p>
            <p className="test--name">{fullName}</p>
            <p className="test--pos">{position}</p>
        </div>
    </div>
  )
}

export default Testimonial