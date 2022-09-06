import PropTypes from 'prop-types';
// import transactions from '../../data/transactions.json';
import s from './TransactionHistory.module.css'

function TransactionHistory({items}) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={s.stringTable}>{item.type}</td>
            <td className={s.stringTable}>{item.amount}</td>
            <td className={s.stringTable}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


TransactionHistory.propTypes = {
    items: PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
}



export default TransactionHistory
