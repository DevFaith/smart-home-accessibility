// Sidebar.jsx
import React from 'react';

const devices = ['Lights', 'Thermostat', 'Security Camera', 'Locks'];

function Sidebar({ setSelectedDevice }) {
  return (
    <div className="w-64 bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-4">Devices</h2>
      <ul>
        {devices.map((device) => (
          <li key={device} className="mb-2">
            <button
              onClick={() => setSelectedDevice(device)}
              className="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded"
            >
              {device}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
