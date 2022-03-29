/*eslint-disable no-nested-ternary */
import { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { TiArrowSortedDown } from 'react-icons/ti';

import { StyledLink, ButtonClose, DropdownButton } from './styles';

interface NavbarProps {
  children?: ReactNode;
  iconName?: IconBaseProps;
  label: string;
  to: string;
  compact: boolean;
  navMobile?: boolean;
  subMenus?: boolean;
  subLinks?: {
    to: string;
    label: string;
  }[];
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export function NavLink({
  children,
  iconName,
  label,
  compact,
  subLinks,
  subMenus,
  onClick,
  ...rest
}: NavbarProps) {
  return (
    <StyledLink end compact={compact ? 0 : 1} onClick={onClick} {...rest}>
      {children || (
        <>
          <div>
            {iconName ? <i>{iconName}</i> : <> </>}

            <ButtonClose type="button">
              <span>{label}</span>
            </ButtonClose>
          </div>

          {subLinks ? (
            <DropdownButton
              type="button"
              compact={compact ? 0 : 1}
              subMenus={subMenus ? 0 : 1}
            >
              <TiArrowSortedDown />
            </DropdownButton>
          ) : (
            <> </>
          )}
        </>
      )}
    </StyledLink>
  );
}
