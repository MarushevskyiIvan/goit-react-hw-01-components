import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(12)};
  padding: ${p => p.theme.spacing(12)};
  width: 320px;

  background-color: ${p => p.theme.colors.lightColor};

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.lg};

  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.wite};

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.md};

  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  overflow: hidden;
`;

export const Title = styled.h2`
  margin-top: ${p => p.theme.spacing(3)};

  text-align: center;
  color: ${p => p.theme.colors.titleTextColor};
`;

export const List = styled.ul`
  margin-top: ${p => p.theme.spacing(8)};

  display: flex;
  justify-content: space-around;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 5);

  padding: ${p => p.theme.spacing(1)};

  background-color: ${p => p.theme.colors.blue};

  border: 1px solid #e7e9fc;
`;

export const ItemTitle = styled.span`
  font-size: 16px;
  color: ${p => p.theme.colors.titleTextColor};
  line-height: 1.5;
  letter-spacing: 0.02em;
`;
export const ItemText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.wite};
`;
