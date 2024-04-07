import React, { FC } from 'react';
import { Theme } from '@mui/material';

// Define the props interface
export interface PageProps {
  text?: string;
}

// Define the functional component
const page: FC<PageProps> = ({ text }) => {

  return (
    <div >
      {/* Render the text if provided, otherwise default text */}
      {text ? text : 'page'}
    </div>
  );
};

export default page;
