import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
