// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }
  return (
    <li className="table-row-item">
      <p className="table-row-text">{title}</p>
      <p className="table-row-text">Rs {amount}</p>
      <p className="table-row-text">{type}</p>

      <button
        type="button"
        className="delete-button"
        onClick={onDeleteTransaction}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default TransactionItem
