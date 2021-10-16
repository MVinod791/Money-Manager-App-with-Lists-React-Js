import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransaction = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionsList: updatedTransaction})
  }

  onChangeSelectType = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeTitleInput = event => {
    console.log(event.target.value)
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {optionId, titleInput, amountInput} = this.state
    const typeOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getYourExpenses = () => {
    const {transactionsList} = this.state
    let yourExpenses = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        yourExpenses += eachTransaction.amount
      }
    })
    return yourExpenses
  }

  getYourIncome = () => {
    const {transactionsList} = this.state
    let yourIncome = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        yourIncome += eachTransaction.amount
      }
    })
    return yourIncome
  }

  getYourBalance = () => {
    const {transactionsList} = this.state
    let yourBalance = 0
    let yourIncome = 0
    let yourExpenses = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        yourIncome += eachTransaction.amount
      } else {
        yourExpenses += eachTransaction.amount
      }
    })
    yourBalance = yourIncome - yourExpenses
    return yourBalance
  }

  render() {
    const {optionId, titleInput, amountInput, transactionsList} = this.state
    const yourBalance = this.getYourBalance()
    const yourIncome = this.getYourIncome()
    const yourExpenses = this.getYourExpenses()
    return (
      <div className="money-manager-container">
        <div className="responsive-container">
          <div className="greetings-container">
            <h1 className="name-heading">Hi,Richard</h1>
            <p className="greeting-text">
              Welcome back to your
              <span className="money-manager-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            yourBalance={yourBalance}
            yourIncome={yourIncome}
            yourExpenses={yourExpenses}
          />
          <div className="transaction-history-container">
            <form
              className="transaction-form-container"
              onSubmit={this.onAddTransaction}
            >
              <h1>Add Transaction</h1>
              <label htmlFor="title" className="input-label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="input"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />
              <label htmlFor="amount" className="input-label">
                AMOUNT
              </label>
              <input
                type="text"
                className="input"
                id="amount"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmountInput}
              />
              <label htmlFor="select" className="input-label">
                TYPE
              </label>
              <select
                id="select"
                className="input"
                value={optionId}
                onChange={this.onChangeSelectType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="transaction-table-container">
                <ul className="transaction-table-menu">
                  <li className="table-header">
                    <p className="table-item">Title</p>
                    <p className="table-item">Amount</p>
                    <p className="table-item">Type</p>
                  </li>
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.onDeleteTransaction}
                      key={eachTransaction.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
