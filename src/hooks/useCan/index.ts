import { useContext } from 'react';

import UserIdentificationContext from '../../contexts/userIdentification';

interface UseCanParams {
  permissions?: string[];
  roles?: string[];
}

function useCan({ permissions, roles }: UseCanParams) {
  const user = useContext(UserIdentificationContext);
  const token = localStorage.getItem('@SolouChuva:token');

  if (!token) {
    return false;
  }

  if (roles) {
    if (roles.length > 0) {
      const hasAllRoles = roles.some(role => {
        return user.roles.includes(role);
      });

      if (!hasAllRoles) {
        return false;
      }
    }
  }

  if (permissions) {
    if (permissions.length > 0) {
      const hasAllPermissions = permissions.every(permission => {
        return user.permissions.includes(permission);
      });

      if (!hasAllPermissions) {
        return false;
      }
    }
  }

  return true;
}

export default useCan;
