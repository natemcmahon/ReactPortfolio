import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function BlogContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // checks what our current page is, and returns the component for that
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the current page which is the state value for the page the user is on
      and we are passing handlePageChange method*/}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* this is the parent div which tells us which component to render */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
