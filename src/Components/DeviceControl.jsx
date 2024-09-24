// DeviceControl.jsx
import React from 'react';

function DeviceControl({ selectedDevice }) {
  const renderControls = () => {
    switch (selectedDevice) {
      case 'Lights':
        return (
          <div>
            <h2 className="text-2xl font-bold">Control Lights</h2>
            <label className="block mt-4">
              Brightness
              <input
                type="range"
                className="w-full mt-2 bg-white"
              />
            </label>
          </div>
        );
      case 'Thermostat':
        return (
          <div>
            <h2 className="text-2xl font-bold">Control Thermostat</h2>
            <label className="block mt-4">
              Temperature
              <input
                type="number"
                className="w-full mt-2 p-2 border bg-gray-900 text-white"
                placeholder="Enter temperature"
              />
            </label>
          </div>
        );
      case 'Security Camera':
        return <h2 className="text-2xl font-bold">View Security Camera Feed</h2>;
      case 'Locks':
        return <h2 className="text-2xl font-bold">Control Door Locks</h2>;
      default:
        return <h2 className="text-2xl font-bold">Select a Device</h2>;
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      {renderControls()}
    </div>
  );
}

export default DeviceControl;
