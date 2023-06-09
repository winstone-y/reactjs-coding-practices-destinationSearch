// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {

    const {destinationsList} = this.props

  state = {searchResult:destinationsList }

  search = event => {
    const {destinationsList} = this.props

    const searchText = event.target.value.toLowerCase()
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.includes(searchText),
    )
    this.setState({searchResult: searchResults})
  }

  render() {
    const {searchResult} = this.state
    return (
      <div className="main">
        <div className="app-container">
          <h1 className="title">Destination Search</h1>
          <div className="search-container">
            <input
              onChange={this.search}
              placeholder="Search"
              type="search"
              className="input"
            />
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
            />
          </div>
          <ul className="cards-container">
            {searchResult.map(eachCard => (
              <DestinationItem destinationItem={eachCard} key={eachCard.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
