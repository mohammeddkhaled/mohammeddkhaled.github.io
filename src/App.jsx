import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@/routes/AppRouter.jsx';
import CinematicLoader from '@/components/loader/CinematicLoader.jsx';
import SmoothScroll from '@/components/layout/SmoothScroll.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <SmoothScroll>
        {isLoading ? (
          <CinematicLoader onComplete={() => setIsLoading(false)} />
        ) : (
          <AppRouter />
        )}
      </SmoothScroll>
    </HelmetProvider>
  );
}
