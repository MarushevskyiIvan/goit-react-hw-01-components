import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 320px;
  padding: ${p => p.theme.spacing(12)};
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(15)};

  background-color: ${p => p.theme.colors.lightColor};

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.shadow.main};
`;

export const ProfileWrapper = styled.div`
  background-color: ${p => p.theme.colors.wite};

  border: 1px solid #e7e9fc;
  border-radius: ${p => p.theme.radii.md};

  box-shadow: ${p => p.theme.shadow.main};
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};

  margin-top: ${p => p.theme.spacing(5)};
`;

export const Avatar = styled.img`
  width: 150px;
  height: 180px;

  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 26px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.titleTextColor};
`;
export const Tag = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.mainTextColor};
`;
export const Location = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.mainTextColor};
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-around;

  margin-top: ${p => p.theme.spacing(6)};
`;

export const StatsItem = styled.li`
  background-color: ${p => p.theme.colors.blue};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);

  height: 60px;

  border-radius: ${p => p.theme.radii.sm};
  border: 2px solid #e7e9fc;

  box-shadow: ${p => p.theme.shadow.main};
`;

export const StatsItemTitle = styled.span`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.titleTextColor};
`;
export const StatsItemText = styled.span`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  font-weight: 500;
  color: ${p => p.theme.colors.wite};
`;
