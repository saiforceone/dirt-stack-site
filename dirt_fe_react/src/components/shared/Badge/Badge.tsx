import React from 'react';
type BadgeProps = {
  iconElement: React.ReactElement;
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({iconElement,text}) => {
  return (
    <span className="flex items-center gap-x-2 w-fit text-white text-lg font-semibold">
      {iconElement}
      {text}
    </span>
  )
}