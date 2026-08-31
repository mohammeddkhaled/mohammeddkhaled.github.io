import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout.jsx';
import HomePage from '@/pages/HomePage.jsx';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
