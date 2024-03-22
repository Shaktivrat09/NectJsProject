import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`w-64 bg-gray-800 ${isOpen ? 'block' : 'hidden'}`}>
        {/* Sidebar content */}
      </div>
      <div className={`flex-1 ${isOpen ? 'ml-64' : ''}`}>
        {/* Main content */}
      </div>
    </div>
  );
};

export default Sidebar;