// Header.jsx
import React, { useState } from 'react';

function Header() {
  const [highContrast, setHighContrast] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="SmartHome Logo" className="h-10 mr-2" /> */}
        <h1 className="text-2xl font-bold">SmartHome</h1>
      </div>

      {/* Centered Accessibility Toggle */}
      <div className="flex justify-center w-full">
        <button
          onClick={() => setHighContrast(!highContrast)}
          className={`px-4 py-2 rounded border ${
            highContrast ? 'bg-white text-black' : 'bg-gray-900 text-white'
          }`}
        >
          Toggle High Contrast
        </button>
      </div>
    </header>
  );
}

export default Header;
