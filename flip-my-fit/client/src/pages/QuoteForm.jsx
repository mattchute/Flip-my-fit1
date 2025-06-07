import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuoteForm() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quote Form</h2>
      <button onClick={() => navigate('/estimate')} className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Quote
      </button>
    </div>
  );
}
