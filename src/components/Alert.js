import { useState, useEffect } from 'react';

function Alert({ message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hiển thị thông báo khi có message và sau 2 giây ẩn nó đi
    if (message) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  }, [message]);
console.log(message)
  return (
    <div
    className={`${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    } bg-green-500 text-white py-2 px-4 rounded-md fixed bottom-4 right-4 transition-opacity transform duration-300 ease-in-out`}
  >
    {message}
  </div>
  );
}

export default Alert;