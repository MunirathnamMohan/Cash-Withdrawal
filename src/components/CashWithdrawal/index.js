import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdramAmout = (id, value) => {
    const {balance} = this.state
    if (balance > 0) {
      this.setState(prevState => ({
        balance: prevState.balance - value,
      }))
    }
  }

  render() {
    const {balance} = this.state

    const {denominationsList} = this.props
    return (
      <div className="bg-con">
        <div className="card-con">
          <div className="top-con">
            <div className="profile">
              <p className="intial">S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="money-con">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="text">In Rupees</p>
            </div>
          </div>
          <p className="withdram">Withdraw</p>
          <p className="text-2">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                item={each}
                key={each.id}
                onWithdramAmout={this.onWithdramAmout}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
