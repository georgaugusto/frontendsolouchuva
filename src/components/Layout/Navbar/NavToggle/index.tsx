import { TiArrowSortedDown } from 'react-icons/ti';

import { Button } from './styles';

interface INavToggleProps {
  compact: boolean;
  setCompact: React.Dispatch<React.SetStateAction<boolean>>;
  setSubMenus: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavToggle({
  compact,
  setCompact,
  setSubMenus,
  ...props
}: INavToggleProps) {
  return (
    <Button
      compact={compact}
      className="nav-toggle"
      onClick={() => {
        setSubMenus(false);
        setCompact(!compact);
      }}
      {...props}
    >
      <TiArrowSortedDown />
    </Button>
  );
}
