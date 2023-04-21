import React from 'react';

import type { CardProps } from '../../../types/types';

export const Card: React.FC<CardProps> = ({ icon, heading, children, link }) => {
  return (
    <div className='p-0 rounded border-slate-700 border-2'>
      <div className='bg-slate-700 rounded-tl rounded-tr h-12'>
        <a className='flex gap-x-2 text-white duration-200 hover:text-green-400 items-center p-2' href={link} target='_blank'>
          {icon}
          <h1 className='text-lg font-semibold'>{heading}</h1>
        </a>
      </div>
      <div className='p-2 text-left'>{children}</div>
    </div>
  );
};
