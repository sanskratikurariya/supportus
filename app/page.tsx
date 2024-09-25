
"use client"

import React from 'react';

// Import all icons from 'lucide-react' as a fallback for potential icon issues
import * as Icons from 'lucide-react'; 
import Navbar from '../components/Navbar';
import DonationForm from '../components/DonationForm';
import SupportersCount from '../components/SupportersCount';


const DonationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 from-2% via-yellow-500 via-25% to-white to-50% pt-10">
      <div className="max-w-6xl mx-auto p-5  mt-10 pb-20 ">
        <Navbar />
        <div className=" rounded-3xl  p-8">
        <h1 className="text-[100px] font-bold mt-20 flex items-center text-black">
        Support <span className="text-[100px] text-white font-bold ml-3">us.</span><Icons.DollarSign className="inline-block ml-3 w-20 h-20 bg-yellow-300 rounded-full p-4" size={48} />

          </h1 >
          <p className="text-4xl mt-3 text-black">
            Money may not be the solution but it 
          </p>
          <p className=" text-4xl text-black">can support the solution.</p>
       
        <img src="/images/image1.jpeg" className='mt-60' alt="" />
          
          <DonationForm />
          <SupportersCount />
       
          <img src="/images/image2.jpeg" className='max-w-75' alt="" />
          <div className="bg-gray-100 p-4 rounded-xl ">
            
            <p className=''>Additional information or testimonials could go here.</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
