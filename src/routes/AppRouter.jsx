import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import CustomerSupportAutomation from '../pages/CustomerSupportAutomation';
import Inappcopilot from '../components/Inappcopilot';
import Conversationdesign from '../components/Conversationdesign';
import Contactcenterautomation from '../components/Contactcenterautomation';
import Pricing from '../components/Pricing';
import ContactSales from '../components/ContactSales';
import Blog from '../pages/Blog';
import BookDemo from '../components/Book_Demo';
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
          <Route path="contact-sales" element={<ContactSales />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="book-demo" element={<BookDemo />} />
         
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

