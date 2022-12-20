import "./style.scss"
import PropTypes from "prop-types"

/**
 * Represents Feature Item.
 * @constructor
 * @param {string} img - The image of the feature.
 * @param {string} title - The title of the feature.
 * @param {string} text - The text of the feature.
 */
const FeatureItem = ({ img, title, text }) => {
  return (
    <div className="feature-item">
      <img src={img} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

FeatureItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default FeatureItem
