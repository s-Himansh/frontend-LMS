import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loading from './component/Loading'; // Import your loading component

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? <Loading /> : <App />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
