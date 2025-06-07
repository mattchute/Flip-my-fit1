// pages/LandingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [showButton, setShowButton] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowButton(false);
    setTimeout(() => navigate('/quote'), 300);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">FLIP MY FIT INSTANT QUOTE</h1>
      {showButton && (
        <button
          onClick={handleClick}
          className="px-6 py-3 text-lg font-medium bg-black text-white rounded-2xl shadow hover:bg-gray-800 transition"
        >
          Get Instant Quote Now
        </button>
      )}
    </div>
  );
}
