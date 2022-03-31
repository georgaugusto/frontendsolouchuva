import React, { createContext, ReactNode, useMemo, useState } from 'react';

type UserIdentificationProps = {
  email: string;
  name: string;
  permissions: Array<string>;
  roles: Array<string>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPermissions: React.Dispatch<React.SetStateAction<Array<string>>>;
  setRoles: React.Dispatch<React.SetStateAction<Array<string>>>;
};

interface UserIdentificationContextProviderProps {
  children: ReactNode;
}

const UserIdentificationContext = createContext<UserIdentificationProps>({
  email: '',
  name: '',
  permissions: [],
  roles: [],
  setEmail: () => {},
  setName: () => {},
  setPermissions: () => {},
  setRoles: () => {},
});

function UserIdentificationContextProvider({
  children,
}: UserIdentificationContextProviderProps) {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [permissions, setPermissions] = useState<Array<string>>([]);
  const [roles, setRoles] = useState<Array<string>>([]);

  const contextValue = useMemo(
    () => ({
      email,
      name,
      permissions,
      roles,
      setEmail,
      setName,
      setPermissions,
      setRoles,
    }),
    [email, name, permissions, roles],
  );

  return (
    <UserIdentificationContext.Provider value={contextValue}>
      {children}
    </UserIdentificationContext.Provider>
  );
}

export { UserIdentificationContextProvider };
export default UserIdentificationContext;
