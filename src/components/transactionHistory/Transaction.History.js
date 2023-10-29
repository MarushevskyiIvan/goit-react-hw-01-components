import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(12)};
  margin-bottom: ${p => p.theme.spacing(12)};
  padding: ${p => p.theme.spacing(8)};
  max-width: 420px;

  background-color: ${p => p.theme.colors.lightColor};

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.lg};

  box-shadow: ${p => p.theme.shadow.main};
`;

export const Table = styled.table`
  padding: ${p => p.theme.spacing(2)};
  width: 420px;

  background-color: ${p => p.theme.colors.wite};

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.md};

  box-shadow: ${p => p.theme.shadow.main};

  overflow: hidden;
`;

export const HeadRow = styled.th`
  width: calc(100% / 3);
  height: 40px;

  background-color: ${p => p.theme.colors.blue};

  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  font-weight: 700;
  color: ${p => p.theme.colors.wite};
`;

export const BodyRow = styled.td`
  text-align: center;

  width: calc(100% / 3);
  height: 40px;

  border: 2px solid ${p => p.theme.colors.blue};

  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.black};
`;
