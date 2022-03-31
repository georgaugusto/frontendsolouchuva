import { useContext } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

import LayoutContext from '../../../contexts/layout';
import UserIdentificationContext from '../../../contexts/userIdentification';

import { Title } from '../Navbar/PageTitle';

import logoImg from '../../../assets/logo.svg';
import userImg from '../../../assets/userProfile.svg';

import { Grid, Menu, StyledLink, Options } from './styles';

export function Header() {
  const user = useContext(UserIdentificationContext);
  const { navMobile, setNavMobile } = useContext(LayoutContext);

  const showNavMobile = () => setNavMobile(!navMobile);

  return (
    <Grid>
      <Title />

      <Options>
        <StyledLink to="/profile">
          <img src={userImg} alt="" />
        </StyledLink>

        <p>{user && user.name?.substring(0, user.name?.lastIndexOf(' '))}</p>

        <Menu
          className="nav-toggle"
          onClick={showNavMobile}
          onKeyDown={showNavMobile}
          role="button"
          tabIndex={0}
        >
          <HiOutlineMenu />
        </Menu>
      </Options>
      <img src={logoImg} alt="" />
    </Grid>
  );
}
