"use client";

import React from 'react'
import  useScreenSize  from './hooks/useScreenSize';

import { ReactNode } from 'react';

  /* eslint-disable */
const ResponsiveComponent = ({children}: {children: (props: {size: any}) => ReactNode}) => {

    const size = useScreenSize();
  return (
    <>
  
    {children({size})}
   
    </>
  )
}

export default ResponsiveComponent