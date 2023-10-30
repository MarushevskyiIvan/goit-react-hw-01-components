import PropTypes from 'prop-types';
import * as Styled from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Styled.Item>
      <Styled.ItemWrapper>
        <Styled.ItemStatus $variant={isOnline}></Styled.ItemStatus>
        <img src={avatar} alt={name} width="48" />
        <Styled.Name>{name}</Styled.Name>
      </Styled.ItemWrapper>
    </Styled.Item>
  );
};

FriendListItem.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
