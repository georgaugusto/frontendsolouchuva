import Can from '../../../Can';
import { links } from '../Links';
import { NavLink } from '../NavLink';

import { LinksGroup } from './styles';

interface INavLinksGroup {
  compact: boolean;
  subMenus: boolean;
  navMobile: boolean;
  showSubMenus: () => void;
  showNavMobile: () => void;
}

export function NavLinksGroup({
  compact,
  subMenus,
  navMobile,
  showNavMobile,
  showSubMenus,
  ...props
}: INavLinksGroup) {
  function menuEventControl(
    event: React.MouseEvent<HTMLElement>,
    subLinks: any,
    //action: any,
  ) {
    if (compact && subLinks) {
      event.preventDefault();
    }

    if (!compact && subLinks) {
      showSubMenus && showSubMenus();
      event.preventDefault();
    }

    if (navMobile && subLinks) {
      showSubMenus && showSubMenus();
      event.preventDefault();
    }

    if (navMobile && !subLinks) {
      showNavMobile && showNavMobile();
    }

    //if (action) {
    //handleSignOut();
    //}
  }

  function closeNavMobile(event: React.MouseEvent<HTMLElement>) {
    if (navMobile) {
      showNavMobile && showNavMobile();
    }
  }

  return (
    <LinksGroup compact={compact} {...props}>
      {links.map(l => {
        return (
          <Can key={l.to} roles={l.roles}>
            <NavLink
              compact={compact}
              to={l.subLinks ? '' : l?.to}
              iconName={l.icon}
              label={l.label}
              subLinks={l.subLinks}
              subMenus={subMenus}
              onClick={event => menuEventControl(event, l.subLinks)}
            />
            {subMenus &&
              l.subLinks?.map(c => (
                <NavLink
                  compact={compact}
                  key={c.to}
                  to={c.to}
                  label={c.label}
                  onClick={event => closeNavMobile(event)}
                />
              ))}
          </Can>
        );
      })}
    </LinksGroup>
  );
}
