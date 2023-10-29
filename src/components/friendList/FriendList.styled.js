import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.spacing(12)};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 160px;
  padding: ${p => p.theme.spacing(2)};
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(4)};

  background-color: ${p => p.theme.colors.lightColor};

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const ItemStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.$variant) {
      return 'green';
    }
    return 'red';
  }};
`;

export const Name = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.mainTextColor};
`;
