import styled from 'styled-components';

const Header = styled.header`
  text-shadow: 0px 0px 12px #356abc;
  -webkit-text-fill-color: #ffcc03;
  -webkit-text-stroke-color: #356abc;
  -webkit-text-stroke-width: 2px;
  text-align: center;
`;

export const HeaderTitle = styled(Header)`
  font: 48px Pokemon, sans-serif;
  min-height: 70px;
`;

export const HeaderSubtitle = styled(Header)`
  font: 24px Pokemon, sans-serif;
`;
