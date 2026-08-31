import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar.jsx';
import Footer from '@/components/footer/FooterSection.jsx';

export default function MainLayout() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
