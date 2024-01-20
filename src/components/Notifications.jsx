import React, { useState, useEffect } from 'react';

const Notifications = ({ notification, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, [notification, onClose]);

  return (
    <div className={`flex justify-center items-center fixed bottom-0 right-0 mb-4 mr-4 notification ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} ${notification?.type} rounded-md p-4 bg-gray-800 text-white`}>
      {notification?.message}
    </div>
  );
};

export default Notifications;
