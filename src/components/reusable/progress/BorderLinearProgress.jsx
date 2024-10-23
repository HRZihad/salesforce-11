import { useTheme } from '@mui/material';
import React from 'react';

const BorderLinearProgress = ({ value }) => {
  const theme = useTheme()
  return (
    <div className="w-full bg-gray-200 rounded-lg overflow-hidden h-6 relative mb-4">
      <div
        className={`h-full bg-gradient-to-r from-green-200 to-green-300 animate-striped relative`}
        style={{ width: `${value}%` }}  // Dynamically set the width based on the value prop
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-300 to-green-500 bg-[length:30px_30px] opacity-20"></div>
      </div>
    </div>
  );
}

export default BorderLinearProgress;
