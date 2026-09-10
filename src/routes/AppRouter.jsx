import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ProjectsPage from '@/pages/ProjectsPage.jsx';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
