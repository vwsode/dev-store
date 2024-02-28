import { Outlet } from 'react-router-dom';

import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';
import HeaderTop from '../HeaderTop/HeaderTop.tsx';

const Layout = () => (
    <>
        <HeaderTop />
        <Header />
        <Outlet />
        <Footer />
    </>
);

export default Layout;
