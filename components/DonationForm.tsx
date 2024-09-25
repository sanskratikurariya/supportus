import React, { useState } from 'react';

const DonationForm: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | string>(50);
  const donationOptions: (number | string)[] = [50, 100, 200, 500, 1000, '1000+'];

  return (
    <div className="mt-30 pt-32">
      <p className="mb-4 text-lg font-bold text-black">Every support matter of any ammount.</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {donationOptions.map((option) => (
          <button
            key={option}
            className={`px-6 py-2 rounded-full ${
              donationAmount === option ? 'bg-black text-white' : 'bg-white border border-gray-900 text-black'
            }`}
            onClick={() => setDonationAmount(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex">
        <input
          type="number"
          value={typeof donationAmount === 'number' ? donationAmount : ''}
          onChange={(e) => setDonationAmount(Number(e.target.value))}
          className="flex-grow p-2 border rounded-l-full text-black border-black"
        />
        <button className="bg-yellow-400 ml-5 text-black text-xl font-bold py-5 px-7 rounded-xl">
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationForm;