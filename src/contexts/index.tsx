import { AuthContextProvider } from './auth';
import { LayoutContextProvider } from './layout';
import { HeaderTitleContextProvider } from './headerTitle';
import { ToastContextProvider } from './toast';

function GlobalContextProvider({ children }: JSX.ElementChildrenAttribute) {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <LayoutContextProvider>
          <HeaderTitleContextProvider>{children}</HeaderTitleContextProvider>
        </LayoutContextProvider>
      </AuthContextProvider>
    </ToastContextProvider>
  );
}

export default GlobalContextProvider;
