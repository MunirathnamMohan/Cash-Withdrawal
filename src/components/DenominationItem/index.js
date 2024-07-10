import './index.css'

const DenominationItem = props => {
  const {item, onWithdramAmout} = props
  const {id, value} = item

  const onWithdram = () => {
    onWithdramAmout(id, value)
  }

  return (
    <li className="withdraw-con">
      <button className="btn" type="button" onClick={onWithdram}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
