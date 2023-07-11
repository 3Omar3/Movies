import React from 'react';

interface RatingCircleProps {
  rating: number;
  styleContainer: string;
  styleText: string;
}

const RatingCircle: React.FC<RatingCircleProps> = ({ rating, styleContainer, styleText }) => {
  const percentage = Math.round(rating * 10);
  const color = percentage >= 70 ? 'green-500' : percentage >= 50 ? 'yellow-500' : 'red-500';
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, transparent ${100 - percentage}%, var(--tw-${color}) 0)`,
  };

  return (
    <div>
      <div className={`relative w-10 h-10 border-2  rounded-full overflow-hidden shadow-md ${styleContainer}`}>
        <div className={`absolute inset-0 flex bg-gray-900 items-center shadow justify-center text-white text-sm font-medium ${styleText}`}>
          {percentage}<span className='font-thin' style={{ fontSize: '.5rem', height: "1.5rem" }}>%</span>
        </div>
      </div>
    </div>
  );
};

export default RatingCircle;
