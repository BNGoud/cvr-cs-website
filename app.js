import React, { useState } from 'react';

// Main App component that manages all pages and navigation
const App = () => {
    // State to keep track of the current page being displayed
    const 'currentPage', setCurrentPage = useState('home');

    // Function to render the correct page component based on the state
    const renderPage = () => {
        switch (currentPage) {
        case 'home':
            return <Home />;
        case 'academics':
            return <Academics />;
        case 'infrastructure':
            return <Infrastructure />;
        case 'faculty':
            return <Faculty />;
        case 'studentCorner':
            return <StudentCorner />;
        case 'publicationsHub':
            return <PublicationsHub />;
        case 'research':
            return <Research />;
        case 'about':
            return <About />;
        case 'contact':
            return <Contact />;
        default:
            return <Home />;
        }
    };

    // The main layout of the application
    return (
        <div className="font-sans bg-gray-50 min-h-screen">
        {/* The navigation bar is the main hub for routing */}
        <Navbar setCurrentPage={setCurrentPage} />
        
        {/* A main container for the content with some padding */}
        <main className="container mx-auto p-4 md:p-8">
            {renderPage()}
        </main>
        
        {/* Simple footer for the website */}
        <footer className="bg-gray-800 text-white text-center p-4">
            &copy; 2024 Department of Computer Science and Engineering (Cyber Security)
        </footer>
        </div>
    );
};