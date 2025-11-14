import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import CustomerSupportAutomation from '../pages/CustomerSupportAutomation';
import Inappcopilot from '../components/inappcopilot';
import Conversationdesign from '../components/Conversationdesign';
import Contactcenterautomation from '../components/Contactcenterautomation';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="automate-support" element={<CustomerSupportAutomation />} />
          <Route path="inapp-copilot" element={<Inappcopilot />} />
          <Route path="conversation-design" element={<Conversationdesign />} />
          <Route path="contact-center-automation" element={<Contactcenterautomation />} />  
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

