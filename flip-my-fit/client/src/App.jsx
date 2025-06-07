import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QuoteForm from './pages/QuoteForm';
import EstimatePage from './pages/EstimatePage';
import PickupDropoffForm from './pages/PickupDropoffForm';
import CounterOfferForm from './pages/CounterOfferForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quote" element={<QuoteForm />} />
        <Route path="/estimate" element={<EstimatePage />} />
        <Route path="/pickup-dropoff" element={<PickupDropoffForm />} />
        <Route path="/counter-offer" element={<CounterOfferForm />} />
      </Routes>
    </Router>
  );
}
