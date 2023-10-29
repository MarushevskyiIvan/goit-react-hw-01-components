import PropTypes from 'prop-types';
import * as Styled from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Styled.Section>
      <Styled.Wrapper>
        {title && <Styled.Title>{title}</Styled.Title>}

        <Styled.List>
          {stats.map(({ id, label, percentage }) => (
            <Styled.Item key={id}>
              <Styled.ItemTitle>{label}</Styled.ItemTitle>
              <Styled.ItemText>{percentage}%</Styled.ItemText>
            </Styled.Item>
          ))}
        </Styled.List>
      </Styled.Wrapper>
    </Styled.Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
