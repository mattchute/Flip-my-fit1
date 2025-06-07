// pages/EstimatePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EstimatePage() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('flipMyFitEstimate')) || {};

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Instant Quote</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Items:</strong> {data.totalItems}</p>
        <p><strong>Condition:</strong> {data.grade}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Selected Brands:</strong> {data.selectedBrands?.join(', ')}</p>
        <p><strong>Brand %:</strong> {data.brandPercentage}%</p>
        <p className="text-xl font-semibold mt-4">Estimated Payout: ${data.estimate}</p>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/pickup-dropoff')}
          className="flex-1 py-3 bg-green-600 text-white rounded hover:bg-green-700"
        >Accept Offer</button>

        <button
          onClick={() => navigate('/counter-offer')}
          className="flex-1 py-3 bg-red-600 text-white rounded hover:bg-red-700"
        >Decline Offer</button>
      </div>
    </div>
  );
}
