import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DeviceControl from './Components/DeviceControl';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [selectedDevice, setSelectedDevice] = useState('Lights');
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar with device options */}
        <Sidebar setSelectedDevice={setSelectedDevice} />

        {/* Main control section */}
        <div className="flex-1 p-4">
          <DeviceControl selectedDevice={selectedDevice} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
