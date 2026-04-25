import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MarketingLayout from '../layouts/MarketingLayout';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import IndustriesPage from '../pages/IndustriesPage';
import SolutionsPage from '../pages/SolutionsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
