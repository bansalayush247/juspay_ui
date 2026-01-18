import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.tsx';
import Layout from './components/Layout.tsx';
import Dashboard from './pages/Dashboard.tsx';
import OrdersList from './pages/OrdersList.tsx';
import Projects from './pages/Projects.tsx';
import Campaigns from './pages/Campaigns.tsx';
import Documents from './pages/Documents.tsx';
import Followers from './pages/Followers.tsx';
import Account from './pages/Account.tsx';
import Corporate from './pages/Corporate.tsx';
import Blog from './pages/Blog.tsx';
import Social from './pages/Social.tsx';
import UserProfile from './pages/UserProfile.tsx';
import OnlineCourses from './pages/OnlineCourses.tsx';
import ECommerce from './pages/ECommerce.tsx';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/orders" element={<Layout showNotifications={false}><OrdersList /></Layout>} />
          <Route path="/ecommerce" element={<Layout><ECommerce /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/courses" element={<Layout><OnlineCourses /></Layout>} />
          <Route path="/profile" element={<Layout><UserProfile /></Layout>} />
          <Route path="/campaigns" element={<Layout><Campaigns /></Layout>} />
          <Route path="/documents" element={<Layout><Documents /></Layout>} />
          <Route path="/followers" element={<Layout><Followers /></Layout>} />
          <Route path="/account" element={<Layout><Account /></Layout>} />
          <Route path="/corporate" element={<Layout><Corporate /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/social" element={<Layout><Social /></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
