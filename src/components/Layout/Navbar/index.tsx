import { HiOutlineLogout } from 'react-icons/hi';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, StyledNav, Backdrop } from './styles';

import { Logo } from './Logo';
import { NavToggle } from './NavToggle';
import { NavLinksGroup } from './NavLinksGroup';
import { NavLink } from './NavLink';
import LayoutContext from '../../../contexts/layout';
import UserIdentificationContext from '../../../contexts/userIdentification';

export function Navbar() {
  const { setEmail, setName, setRoles, setPermissions } = useContext(
    UserIdentificationContext,
  );

  const navigate = useNavigate();

  const { compact, setCompact } = useContext(LayoutContext);
  const { navMobile, setNavMobile } = useContext(LayoutContext);
  const { subMenus, setSubMenus } = useContext(LayoutContext);

  const showSubMenus = () => setSubMenus(!subMenus);
  const showNavMobile = () => setNavMobile(!navMobile);

  function getOut() {
    window.localStorage.clear();
    setEmail('');
    setName('');
    setRoles([]);
    setPermissions([]);

    navigate('/', { replace: true });
  }

  return (
    <Container>
      <Backdrop visible={navMobile} onClick={showNavMobile} />
      <StyledNav compact={compact} visible={navMobile}>
        <Logo compact={compact} />
        <NavLinksGroup
          compact={compact}
          subMenus={subMenus}
          navMobile={navMobile}
          showSubMenus={showSubMenus}
          showNavMobile={showNavMobile}
        />
        <NavLink
          iconName={<HiOutlineLogout />}
          label="Sair"
          to="/"
          onClick={() => getOut()}
          compact={compact}
        />
      </StyledNav>
      <NavToggle
        compact={compact}
        setCompact={setCompact}
        setSubMenus={setSubMenus}
      />
    </Container>
  );
}
