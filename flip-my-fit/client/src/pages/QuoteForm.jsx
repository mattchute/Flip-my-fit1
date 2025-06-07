// pages/QuoteForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import calculateEstimate from '../utils/calculateEstimate';

const categories = [
  'T-Shirts', 'Hoodies', 'Jeans/Pants', 'Dresses/Skirts',
  'Jackets', 'Activewear', 'Shirts', 'Other'
];
const brands = ['Nike', 'Adidas', 'Lululemon', 'Zara', 'H&M', 'Other'];
const grades = ['A', 'B', 'C', 'D'];
const genders = ['Men', 'Women', 'Mixed'];

export default function QuoteForm() {
  const [gender, setGender] = useState('Men');
  const [grade, setGrade] = useState('A');
  const [quantities, setQuantities] = useState(Array(categories.length).fill(0));
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandPercentage, setBrandPercentage] = useState(100);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const updateQuantity = (index, value) => {
    const updated = [...quantities];
    updated[index] = parseInt(value) || 0;
    setQuantities(updated);
  };

  const totalItems = quantities.reduce((a, b) => a + b, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (totalItems < 20) return alert('Minimum 20 items required.');

    const estimate = calculateEstimate({
      quantities, grade, gender, brandPercentage, selectedBrands
    });

    const data = {
      name, email, estimate, totalItems, grade, gender, selectedBrands, brandPercentage, quantities
    };

    await fetch('/api/send-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    localStorage.setItem('flipMyFitEstimate', JSON.stringify(data));
    navigate('/estimate');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-6">
      <div>
        <label className="font-semibold block mb-1">Name</label>
        <input className="w-full p-2 border rounded" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label className="font-semibold block mb-1">Email</label>
        <input type="email" className="w-full p-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label className="font-semibold">Gender</label>
        <div className="flex gap-4 mt-2">
          {genders.map(g => (
            <button
              key={g}
              type="button"
              onClick={() => setGender(g)}
              className={`px-4 py-2 rounded ${gender === g ? 'bg-black text-white' : 'bg-gray-200'}`}
            >{g}</button>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">Condition Grade</label>
        <select value={grade} onChange={e => setGrade(e.target.value)} className="w-full p-2 border rounded">
          {grades.map(g => <option key={g}>{g}</option>)}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2">Item Quantities (min 20 total)</label>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <div key={cat}>
              <label>{cat}</label>
              <input
                type="number"
                min="0"
                className="w-full p-2 border rounded"
                value={quantities[i]}
                onChange={e => updateQuantity(i, e.target.value)}
              />
            </div>
          ))}
        </div>
        <p className="text-sm mt-1">Total Items: {totalItems}</p>
      </div>

      <div>
        <label className="block font-semibold mb-2">Select Brands</label>
        <div className="grid grid-cols-2 gap-2">
          {brands.map(b => (
            <label key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(b)}
                onChange={() => handleBrandChange(b)}
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Brand Percentage ({brandPercentage}%)</label>
        <input
          type="range"
          min="0"
          max="100"
          value={brandPercentage}
          onChange={e => setBrandPercentage(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-black text-white font-semibold rounded-lg mt-6 hover:bg-gray-800"
      >
        Calculate Estimate
      </button>
    </form>
  );
}
