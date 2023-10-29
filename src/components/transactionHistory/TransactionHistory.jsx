import PropTypes from 'prop-types';
import * as Styled from './Transaction.History';

export const TransactionHistory = ({ item }) => {
  return (
    <Styled.Table>
      <thead>
        <Styled.HeadRow>
          <Styled.Row>Type</Styled.Row>
          <Styled.Row>Amount</Styled.Row>
          <Styled.Row>Currency</Styled.Row>
        </Styled.HeadRow>
      </thead>
      <tbody>
        {item.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  );
};

TransactionHistory.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.bool.isRequired,
    })
  ),
};
