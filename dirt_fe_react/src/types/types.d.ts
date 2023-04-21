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

export type CardProps = {
  readonly icon?: React.ReactElement;
  readonly heading: string;
  readonly link: string;
  readonly children: React.ReactNode;
};

export interface FooterLinkProps {
  readonly link: string;
  readonly icon: React.ReactElement;
  readonly title: string;
}