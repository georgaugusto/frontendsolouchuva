import { StyleLink } from './styles';

import logoImg from '../../../../assets/logo.png';

interface ILogoProps {
  compact: boolean;
}

export function Logo({ compact }: ILogoProps) {
  return (
    <StyleLink
      to={{
        pathname: '/dashboard',
      }}
      compact={compact ? 1 : 0}
    >
      <img src={logoImg} alt="" />
      <span>Sol ou Chuva</span>
    </StyleLink>
  );
}
