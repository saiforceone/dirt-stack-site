import React from 'react';

import type { CardProps } from '../../../types/types';

export const Card: React.FC<CardProps> = ({ icon, heading, children }) => {
  return (
    <div className="p-0 rounded border-slate-400 border-2">
      <div className="flex gap-x-2 items-center text-white bg-slate-400 rounded-tl rounded-tr p-2 h-12">
        {icon}
        <h1>{heading}</h1>
      </div>
      <div className="p-2 text-left">{children}</div>
    </div>
  );
};
