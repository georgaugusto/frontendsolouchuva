import { useContext } from 'react';

import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import { Grid, GridNav, GridHeader, GridMain, GridFooter } from './styles';
import LayoutContext from '../../contexts/layout';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children, ...rest }: LayoutProps) {
  const { compact } = useContext(LayoutContext);

  return (
    <Grid {...rest}>
      <GridNav>
        <Navbar />
      </GridNav>
      <GridHeader compact={compact}>
        <Header />
      </GridHeader>
      <GridMain compact={compact}>{children}</GridMain>
      <GridFooter compact={compact}>
        <Footer />
      </GridFooter>
    </Grid>
  );
}

export default Layout;
