import PropTypes from 'prop-types';
import * as Styled from './Transaction.History';

export const TransactionHistory = ({ item }) => {
  return (
    <Styled.Wrapper>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.HeadRow>Type</Styled.HeadRow>
            <Styled.HeadRow>Amount</Styled.HeadRow>
            <Styled.HeadRow>Currency</Styled.HeadRow>
          </tr>
        </thead>
        <tbody>
          {item.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <Styled.BodyRow>{type}</Styled.BodyRow>
              <Styled.BodyRow>{amount}</Styled.BodyRow>
              <Styled.BodyRow>{currency}</Styled.BodyRow>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Wrapper>
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
