import PropTypes from 'prop-types';
import * as Styled from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Styled.ProfileCard>
      <Styled.ProfileWrapper>
        <Styled.Description>
          <Styled.Avatar src={avatar} alt={username} className="avatar" />
          <Styled.Name>{username}</Styled.Name>
          <Styled.Tag>@{tag}</Styled.Tag>
          <Styled.Location>{location}</Styled.Location>
        </Styled.Description>

        <Styled.ProfileStats>
          <Styled.StatsItem>
            <Styled.StatsItemTitle>Followers</Styled.StatsItemTitle>
            <Styled.StatsItemText>{followers}</Styled.StatsItemText>
          </Styled.StatsItem>
          <Styled.StatsItem>
            <Styled.StatsItemTitle>Views</Styled.StatsItemTitle>
            <Styled.StatsItemText>{views}</Styled.StatsItemText>
          </Styled.StatsItem>
          <Styled.StatsItem>
            <Styled.StatsItemTitle>Likes</Styled.StatsItemTitle>
            <Styled.StatsItemText>{likes}</Styled.StatsItemText>
          </Styled.StatsItem>
        </Styled.ProfileStats>
      </Styled.ProfileWrapper>
    </Styled.ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
