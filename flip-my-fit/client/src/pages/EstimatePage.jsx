import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EstimatePage() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Estimated Quote: $150</h2>
      <div className="flex gap-4">
        <button onClick={() => navigate('/pickup-dropoff')} className="bg-green-600 text-white px-4 py-2 rounded">Accept Offer</button>
        <button onClick={() => navigate('/counter-offer')} className="bg-red-600 text-white px-4 py-2 rounded">Decline Offer</button>
      </div>
    </div>
  );
}
