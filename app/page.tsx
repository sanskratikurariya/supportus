
"use client"

import React from 'react';
// Import all icons from 'lucide-react' as a fallback for potential icon issues
import * as Icons from 'lucide-react'; 
import Navbar from '../components/Navbar';
import DonationForm from '../components/DonationForm';
import SupportersCount from '../components/SupportersCount';

const DonationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 from-10% via-yellow-500 via-20% to-white  to-70% pt-10">
      <div className="max-w-3xl mx-auto p-5  mt-10 pb-20 ">
        <Navbar />
        <div className=" rounded-3xl  p-8">
        <h1 className="text-[80px] font-bold mt-20 flex items-center text-black">
        Support <span className="text-[80px] text-white font-bold ml-3">us.</span><Icons.DollarSign className="inline-block ml-2" size={48} />

          </h1 >
          <p className="text-xl mt-10 text-black">
            Money may not be the solution but it can support the solution.
          </p>
          <hr className="border-t border-black mt-60" />
          <DonationForm />
          <SupportersCount />
          <hr className="border-t border-black mt-10" />
          <div className="bg-gray-100 p-4 rounded-xl mt-8">
            
            <p className=''>Additional information or testimonials could go here.</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
