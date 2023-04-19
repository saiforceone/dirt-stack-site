import React from 'react';
import type {FooterLinkProps} from '../../../types/types';

export const FooterLink: React.FC<FooterLinkProps> = ({link, icon,title}) => {
  return (
    <a className="flex text-white hover:text-white items-center gap-x-2" href={link} target="_blank">
      {icon} {title}
    </a>
  )
}