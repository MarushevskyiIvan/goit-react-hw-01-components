import * as Styled from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friendList }) => {
  return (
    <Styled.List>
      {friendList.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Styled.List>
  );
};
