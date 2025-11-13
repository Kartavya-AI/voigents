import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import CustomerSupportAutomation from '../pages/CustomerSupportAutomation';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="automate-support" element={<CustomerSupportAutomation />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

