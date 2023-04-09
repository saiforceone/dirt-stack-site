import React from 'react';

export type Typography = { children: React.ReactNode };

export type LayoutProps = { children: React.ReactNode };

export type DIRTStackPageComponent = {
  children: React.ReactNode;
  /**
   * Optional layout wrapper
   */
  layout?: React.ReactElement;
};
