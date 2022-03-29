import { useContext } from 'react';
import HeaderTitleContext from '../../../../contexts/headerTitle';

import { PageTitle } from './styles';

export function Title() {
  const { headerTitle } = useContext(HeaderTitleContext);

  return (
    <PageTitle>
      <h3>{headerTitle || 'Sol ou Chuva'}</h3>
    </PageTitle>
  );
}
