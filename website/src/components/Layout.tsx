import { ReactNode } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

type IProps = {
  children: ReactNode;
};

const Layout = ({ children }: IProps) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
