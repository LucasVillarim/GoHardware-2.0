import { Container, NavBar } from './style';
import {Logo, NavLink } from'../common/styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo>GoHardware</Logo>
      <NavBar>
        <NavLink href="#"><span>stores</span></NavLink>
        <NavLink href="#"><span>about</span></NavLink>
        <NavLink href="#"><span>social</span></NavLink>
      </NavBar>
    </Container>
  )
}

export default Header;