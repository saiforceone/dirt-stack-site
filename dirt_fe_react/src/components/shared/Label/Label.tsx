import React from 'react';
import { BiLinkExternal } from 'react-icons/all';

type LabelProps = {
  iconElement?: React.ReactNode;
  link: string;
  labelText: string;
}

export const Label: React.FC<LabelProps> = ({iconElement, link, labelText}) => {
  return (
    <a className="text-green-600 hover:text-green-400 duration-200" href={link} target="_blank">
      <span className="flex items-center w-fit gap-x-1 font-semibold  text-lg underline p-1 mr-1 rounded">
        {iconElement}
        {labelText}
        <BiLinkExternal className="text-green-600 hover:text-green-400 duration-200 ml-1" size={16} />
      </span>
    </a>
  );
}