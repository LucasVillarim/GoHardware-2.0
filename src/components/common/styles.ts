import styled from 'styled-components';
import { palette } from '../../utils/variables';

export const Area = styled.div `
  width: -webkit-fill-available;
  margin: 10em 1em 0 1em;
  padding: 2em;
`;

export const Logo = styled.div `
  font-family: 'Goldman', cursive;
  font-size: 40px;
  font-weight: 700;
  color: ${palette.red};
  width: 300px;
  margin-left: 10%;
`;

export const NavLink = styled.a `
  position: relative;
  font-family: 'Orbitron', sans-serif;
  font-size: 20px;
  font-weight: 700;
  background: transparent;
  color: ${palette.red};
  padding: .5em;
  margin: 0 1em;
  border: 1px solid ${palette.red};
  text-decoration: none;
`;

export const Button = styled.button `
  font-size: 32px;
  font-weight: 700;
  background: ${palette.red};
  width: 150px;
  height: 48px;
  border: 1px solid ${palette.red};
  border-radius: 8px;
  box-shadow: 0 0 10px 1 rgba(0, 0, 0, 0.3);
  transition: 0.2s all;
  outline: none;
  :hover {
    background: transparent;
    color: ${palette.white};
  }
  :active {
    outline: none;
  }
`;