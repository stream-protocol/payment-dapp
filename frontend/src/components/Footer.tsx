import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto flex flex-col items-center justify-center py-4 sm:flex-row">
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <p className="text-sm">&copy; 2023 Stream Foundation., Co Ltd. All Rights Reserved.</p>
        </div>
        <div className="mt-2 sm:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="mailto:contact@streamprotocol.org" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://app.gitbook.com/invite/9eBaoUspGpGsG968Qbyp/Tek5i7rNSo05rW1lwpsc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://x.com/stream_protocol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-x"></i> X
              </a>
            </li>
            <li>
              <a href="https://github.com/stream-protocol/payment-dapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            {/* Add more footer links as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
