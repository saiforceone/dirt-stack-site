import type { FC } from 'react';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/all';

interface NoteProps {
  iconElement?: React.ReactNode;
  labelText: string;
  content: string;
}

export const Note: FC<NoteProps> = ({ iconElement, labelText, content }) => {
  return (
    <div className="flex items-center gap-x-2">
      {iconElement ? iconElement : <FaInfoCircle size={20} />}
      <div className="flex flex-col justify-items-start text-left md:flex-row md:items-center md:gap-x-2">
        <span className="underline italic">{labelText}</span>{' '}
        <span className="text-slate-400">{content}</span>
      </div>
    </div>
  );
};
