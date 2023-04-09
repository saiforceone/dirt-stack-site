import React from 'react';

import type { Typography } from '../../../types/types';

const H2: React.FC<Typography> = ({ children }) => (
  <h2 className="text-white text-5xl font-heading">{children}</h2>
);

const Paragraph: React.FC<Typography> = ({ children }) => (
  <p className="text-slate-400 text-2xl">{children}</p>
);

export { H2, Paragraph };
