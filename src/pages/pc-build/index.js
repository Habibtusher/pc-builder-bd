import RootLayout from '@/layout/RootLayout';
import React from 'react';

const PcBuild = () => {
    return (
        <div>
            This is pc build page
        </div>
    );
};

export default PcBuild;
PcBuild.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }