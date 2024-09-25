import React, { useState } from 'react';

const DonationForm: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | string>(50);
  const donationOptions: (number | string)[] = [50, 100, 200, 500, 1000, '1000+'];

  return (
    <div className="mt-30 pt-24 ">
      <p className="mb-7 text-5xl  text-black">Every support matter of any ammount.</p>
      <div className="flex flex-wrap gap-5  mb-8">
        {donationOptions.map((option) => (
          <button
            key={option}
            className={`px-6 py-2 rounded-xl w-36 h-20 text-4xl ${donationAmount === option ? 'bg-black text-white' : 'bg-white border border-gray-900 text-black'
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
          className="flex-grow p-6 w-20 text-4xl border rounded-xl text-black border-black"
        />
        <button className="bg-yellow-300 ml-5 z-50 text-black w-60 text-4xl font-bold py-3 px-3 rounded-2xl">
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationForm;