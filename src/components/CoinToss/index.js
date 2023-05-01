import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {totalCount: 0, headsCount: 0, tailsCount: 0, isHead: true}

  onTossCoin = () => {
    const getNum = Math.floor(Math.random() * 2)
    if (getNum === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else if (getNum === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, isHead} = this.state
    const scrImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="coin-toss-game-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="disc">Heads (or) Tails</p>
          <img src={scrImage} alt="toss result" className="head-img" />
          <div className="button-container">
            <button type="button" onClick={this.onTossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="counts-container">
            <div>
              <p className="count">Total: {totalCount}</p>
            </div>
            <div>
              <p className="count">Heads: {headsCount}</p>
            </div>
            <div>
              <p className="count">Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
