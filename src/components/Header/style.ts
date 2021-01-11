import styled from 'styled-components';
import { palette } from '../../utils/variables';

export const Container = styled.div `
  background: ${palette.black};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  border-bottom: 8px solid ${palette.red};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  z-index: 5;

  a:before {
    content: '';
    position: absolute;
    top: 6px;
    left: -1px;
    background: ${palette.black};
    width: calc(100% + 2px);
    height: 32px;
    transition: 0.2s ease-in-out;
    transform: scaleY(1);
  }

  a:hover:before {
    transform: scaleY(0);    
  }

  a:after {
    content: '';
    position: absolute;
    top: -1px;
    left: 6px;
    background: ${palette.black};
    width: calc(100% - 12px);
    height: calc(100% + 2px);
    transition: 0.2s ease-in-out;
    transform: scaleX(1);
  }

  a:hover:after {
    transform: scaleX(0);
  }

  a:last-child {
    margin-right: 8em;
  }

  span {
    position: relative;
    z-index: 3;
  }
`;

export const NavBar = styled.div `
  
`;