import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function EventCard({ detailsLink = "#", isReversed = false }) {
  return (
    <div 
      className="w-80 rounded-2xl overflow-hidden border border-black flex flex-col"
      style={{ boxShadow: "0px 3px 2px 0px #000000" }} 
    >
      {/* Top Section (Smaller) */}
      <div className={`h-10 ${isReversed ? 'bg-white' : 'bg-black'} relative`}>
        {isReversed && (
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex gap-1">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
        )}
      </div>

      {/* Bottom Section (Larger) */}
      <div className={`p-6 flex-grow min-h-35 flex flex-col justify-between ${isReversed ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="text-left text-sm font-medium mt-auto flex items-center">
          <a href={detailsLink} className="cursor-pointer hover:underline flex items-center">
            View Details
            <div className="w-4 h-4 bg-black rounded-full ml-2"></div>
          </a>
          <FaArrowRight className="text-white -rotate-45" />
        </div>
      </div>
    </div>
  );
}