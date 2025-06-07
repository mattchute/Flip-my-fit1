// pages/CounterOfferForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CounterOfferForm() {
  const [form, setForm] = useState({
    price: '',
    email: '',
    phone: '',
    comments: '',
    images: []
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setForm(prev => ({ ...prev, images: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.images.length > 5) return alert('Max 5 images allowed.');
    alert('Counter offer submitted!');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-4">
      <h2 className="text-xl font-bold mb-2">Counter Offer</h2>

      <input name="price" value={form.price} onChange={handleChange} placeholder="Asking Price ($)" required className="w-full p-2 border rounded" />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />
      <textarea name="comments" value={form.comments} onChange={handleChange} placeholder="Comments" className="w-full p-2 border rounded" />
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="w-full" />
      <p className="text-sm text-gray-500">Max 5 images</p>

      <div className="flex gap-4">
        <button type="submit" className="flex-1 py-3 bg-black text-white rounded hover:bg-gray-800">Submit</button>
        <button type="button" onClick={() => navigate('/estimate')} className="flex-1 py-3 bg-gray-300 rounded">Go Back</button>
      </div>
    </form>
  );
}
