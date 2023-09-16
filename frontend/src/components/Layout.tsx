import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-950 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold">StreamPay</h1>
          {/* Add navigation links or other header content here */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          {/* Add footer content, links, and copyright information here */}
          <p className="text-gray-600 text-center">
            &copy; {new Date().getFullYear()} © 2023 StreamPayments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
