import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import PreHeader from '@components/PreHeader/PreHeader';


const Layout = () => (
    <>
        <PreHeader />
        <Header />
        <Outlet />
        <Footer />
    </>
);

export default Layout;
