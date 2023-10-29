import PropTypes from 'prop-types';
import * as Styled from './FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <Styled.List>
      {friendList.map(({ id, avatar, name, isOnline }) => (
        <Styled.Item key={id}>
          <Styled.ItemWrapper>
            <Styled.ItemStatus $variant={isOnline}></Styled.ItemStatus>
            <img src={avatar} alt={name} width="48" />
            <Styled.Name>{name}</Styled.Name>
          </Styled.ItemWrapper>
        </Styled.Item>
      ))}
    </Styled.List>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
