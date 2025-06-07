import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">FLIP MY FIT INSTANT QUOTE</h1>
      <button onClick={() => navigate('/quote')} className="bg-black text-white px-6 py-3 rounded-full text-lg">
        Get Instant Quote Now
      </button>
    </div>
  );
}
