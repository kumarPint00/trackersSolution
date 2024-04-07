'use client';
import React, { FC } from 'react'
import {Theme} from '@mui/material'
 export interface PageProps {
    text?: string
}

const page: FC<PageProps> = ( props ) => {

  return (
    <div>
     hello world
    </div>
  )
}
export default page;