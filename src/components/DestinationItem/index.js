// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <li className="li">
      <img className="image" alt={name} src={imgUrl} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
