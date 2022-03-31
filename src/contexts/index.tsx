import { AuthContextProvider } from './auth';
import { LayoutContextProvider } from './layout';
import { HeaderTitleContextProvider } from './headerTitle';
import { ToastContextProvider } from './toast';
import { UserIdentificationContextProvider } from './userIdentification';

function GlobalContextProvider({ children }: JSX.ElementChildrenAttribute) {
  return (
    <ToastContextProvider>
      <UserIdentificationContextProvider>
        <AuthContextProvider>
          <LayoutContextProvider>
            <HeaderTitleContextProvider>{children}</HeaderTitleContextProvider>
          </LayoutContextProvider>
        </AuthContextProvider>
      </UserIdentificationContextProvider>
    </ToastContextProvider>
  );
}

export default GlobalContextProvider;
