import styled from 'styled-components';
import { palette } from '../../utils/variables'; 

export const Container = styled.div `
  padding-top: 72px;
  width: -webkit-fill-available;

  div {
    position: relative;
  }

  p {
    color: ${palette.white};
    max-width: 70%;
    letter-spacing: 2px;
  }

  img:last-child {
    position: absolute;
    top: 20px;
    left: 0;
    z-index: -1;
  }
`;

export const Banner = styled.div `
  background: ${palette.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  height: 400px;
`;