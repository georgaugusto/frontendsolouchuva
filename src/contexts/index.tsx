import { AuthContextProvider } from './auth';
import { LayoutContextProvider } from './layout';
import { HeaderTitleContextProvider } from './headerTitle';
import { ToastContextProvider } from './toast';

function GlobalContextProvider({ children }: JSX.ElementChildrenAttribute) {
  return (
    <AuthContextProvider>
      <ToastContextProvider>
        <LayoutContextProvider>
          <HeaderTitleContextProvider>{children}</HeaderTitleContextProvider>
        </LayoutContextProvider>
      </ToastContextProvider>
    </AuthContextProvider>
  );
}

export default GlobalContextProvider;
