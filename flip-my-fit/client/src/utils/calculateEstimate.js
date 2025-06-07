// utils/calculateEstimate.js
export default function calculateEstimate({ quantities, grade, gender, brandPercentage, selectedBrands }) {
  const categoryMultipliers = {
    'T-Shirts': 0.8,
    'Hoodies': 1.2,
    'Jeans/Pants': 1.05,
    'Dresses/Skirts': 1.15,
    'Jackets': 1.4,
    'Activewear': 1.3,
    'Shirts': 1.0,
    'Other': 0.7
  };

  const gradeMultipliers = { A: 1.3, B: 1.1, C: 0.9, D: 0.6 };
  const genderMultipliers = { Men: 1.0, Women: 1.0, Mixed: 0.9 };

  const basePrice = 1;
  const totalItems = quantities.reduce((sum, qty) => sum + qty, 0);

  let total = 0;
  Object.entries(categoryMultipliers).forEach(([cat, multiplier], i) => {
    total += (quantities[i] || 0) * basePrice * multiplier;
  });

  total *= gradeMultipliers[grade];
  total *= genderMultipliers[gender];

  const brandWeight = brandPercentage / 100;
  const brandedValue = total * brandWeight;
  const unbrandedValue = (total * (1 - brandWeight)) / 8;
  total = brandedValue + unbrandedValue;

  if (totalItems >= 100) total *= 0.9;
  else if (totalItems >= 50) total *= 0.95;

  return Math.round(total);
}
