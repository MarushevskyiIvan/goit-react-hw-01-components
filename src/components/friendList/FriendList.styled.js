import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.spacing(12)};
`;
export const ItemWrapper = styled.div`
  background-color: ${p => p.theme.colors.wite};

  padding: ${p => p.theme.spacing(3)};

  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.sm};

  box-shadow: ${p => p.theme.shadow.main};
`;
export const Item = styled.li`
  padding: ${p => p.theme.spacing(2)};
  width: 200px;
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(4)};

  background-color: ${p => p.theme.colors.lightColor};

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.md};

  box-shadow: ${p => p.theme.shadow.main};
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
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.mainTextColor};
`;
