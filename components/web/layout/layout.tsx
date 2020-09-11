import Link from 'next/link';

import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='bg-gray-100'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
