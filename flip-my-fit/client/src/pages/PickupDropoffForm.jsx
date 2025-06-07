// pages/PickupDropoffForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PickupDropoffForm() {
  const [method, setMethod] = useState('Pickup');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    date: '',
    packaging: '',
    notes: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${method} info submitted!`);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-4">
      <h2 className="text-xl font-bold mb-2">{method} Details</h2>

      <div className="flex gap-4 mb-4">
        <button type="button" onClick={() => setMethod('Pickup')} className={`px-4 py-2 rounded ${method === 'Pickup' ? 'bg-black text-white' : 'bg-gray-200'}`}>Pickup</button>
        <button type="button" onClick={() => setMethod('Drop-Off')} className={`px-4 py-2 rounded ${method === 'Drop-Off' ? 'bg-black text-white' : 'bg-gray-200'}`}>Drop-Off</button>
      </div>

      <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full p-2 border rounded" />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full p-2 border rounded" />

      {method === 'Pickup' ? (
        <>
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Pickup Address" required className="w-full p-2 border rounded" />
          <input name="packaging" value={formData.packaging} onChange={handleChange} placeholder="Packaging Type" className="w-full p-2 border rounded" />
        </>
      ) : (
        <input name="location" value={formData.location} onChange={handleChange} placeholder="Drop-Off Location" required className="w-full p-2 border rounded" />
      )}

      <input name="date" type="datetime-local" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded" />
      <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Additional Notes" className="w-full p-2 border rounded" />

      <button type="submit" className="w-full py-3 bg-black text-white rounded hover:bg-gray-800">Submit</button>
    </form>
  );
}
