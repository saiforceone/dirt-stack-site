import React from 'react';

import type { Typography } from '../../../types/types';

const H1: React.FC<Typography> = ({ children }) => (
  <h1 className="text-white text-8xl font-heading">{children}</h1>
);
const H2: React.FC<Typography> = ({ children }) => (
  <h2 className="text-white text-5xl font-heading">{children}</h2>
);

const H3: React.FC<Typography> = ({ children }) => (
  <h3 className="text-3xl text-slate-400 font-heading">{children}</h3>
);

const Paragraph: React.FC<Typography> = ({ children }) => (
  <p className="text-slate-400 text-2xl">{children}</p>
);

export { H1, H2, H3, Paragraph };
