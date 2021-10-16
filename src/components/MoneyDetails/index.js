// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpenses} = props
  return (
    <div className="account-container">
      <div className="your-balance-card your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div>
          <p className="balance-text">Your Balance</p>
          <p className="rupees-heading" testid="balanceAmount">
            Rs {yourBalance}
          </p>
        </div>
      </div>
      <div className="your-balance-card your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div>
          <p className="balance-text">Your Income</p>
          <p className="rupees-heading" testid="incomeAmount">
            Rs {yourIncome}
          </p>
        </div>
      </div>
      <div className="your-balance-card your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div>
          <p className="balance-text">Your Expenses</p>
          <p className="rupees-heading" testid="expensesAmount">
            Rs {yourExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
