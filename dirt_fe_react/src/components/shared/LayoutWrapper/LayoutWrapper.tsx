import React from 'react';

export type LayoutWrapperProps = {
  children?: React.ReactNode;
};

function LayoutWrapper({ children }: LayoutWrapperProps): JSX.Element {
  console.log('Page from wrapper: ', children);
  return (
    <div>
      <p>Test</p>
    </div>
  );
}

export default (props: LayoutWrapperProps) => <LayoutWrapper {...props} />;
