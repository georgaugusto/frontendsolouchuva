import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import UserIdentificationContext from '../contexts/userIdentification';

interface AuthRouteProps {
  permissions?: string[];
  roles?: string[];
}

function AuthRoute({ permissions, roles }: AuthRouteProps) {
  const token = localStorage.getItem('@SolouChuva:token');
  const user = useContext(UserIdentificationContext);
  const location = useLocation();

  const userCanAccess = () => {
    if (!token) {
      return false;
    }

    if (roles) {
      if (roles.length > 0) {
        const hasAllRoles = roles?.some(role => {
          return user.roles?.includes(role);
        });

        if (!hasAllRoles) {
          return false;
        }
      }
    }

    if (permissions) {
      if (permissions?.length > 0) {
        const hasAllPermissions = permissions?.every(permission => {
          return user.permissions?.includes(permission);
        });

        if (!hasAllPermissions) {
          return false;
        }
      }
    }

    return true;
  };

  return userCanAccess() ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default AuthRoute;
