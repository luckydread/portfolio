"use client";
import React from 'react'
import { BtnList } from '@/app/data';
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';

const Navigation = () => {

    const angleIncrement = 360 / BtnList.length;

    const size = useScreenSize();
    const isLargeScreen = typeof size === 'number' && size >= 1024;  
    const isMediumScreen = typeof size === 'number' && size >= 768;

    /**
     *     {({size}) => {
            return size && size >= 480 ?(

              <div className='w-max flex items-center justify-center relative hover:pause  animate-spin-slow group'>
    
              {
                  BtnList.map((btn, index) =>   {
                      const angleRadient  = (index*angleIncrement*Math.PI)/180
                      const radius = isLargeScreen ? 'calc(20vw - 1rem)' : isMediumScreen ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
                      const x = `calc(${radius}*${Math.cos(angleRadient)})`;
                      const y = `calc(${radius}*${Math.sin(angleRadient)})`
      
              
                      return <NavButton key={btn.label} x={x} y={y} {...btn}/>
                      
                  })}
          </div>
            ) : (
              <>
              <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden'>
    
    {
        BtnList.slice(BtnList.length / 2, BtnList.length).map((btn, index) =>   {
            const angleRadient  = (index*angleIncrement*Math.PI)/180
            const radius = isLargeScreen ? 'calc(20vw - 1rem)' : isMediumScreen ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
            const x = `calc(${radius}*${Math.cos(angleRadient)})`;
            const y = `calc(${radius}*${Math.sin(angleRadient)})`

    
            return <NavButton key={btn.label} x={x} y={y} {...btn}/>
            
        })}
</div><div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden'>
    
    {
        BtnList.map((btn, index) =>   {
            const angleRadient  = (index*angleIncrement*Math.PI)/180
            const radius = isLargeScreen ? 'calc(20vw - 1rem)' : isMediumScreen ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
            const x = `calc(${radius}*${Math.cos(angleRadient)})`;
            const y = `calc(${radius}*${Math.sin(angleRadient)})`

    
            return <NavButton key={btn.label} x={x} y={y} {...btn}/>
            
        })}
</div>
              
              </>
            );

            
          }}


     */


  return (
    <div className='w-full fixed h-screen flex items-center justify-center'>
       <ResponsiveComponent>

       {({ size }) => {
          return size && size >= 480 ? (
            <div
       
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLargeScreen 
                  ? "calc(20vw - 1rem)"
                  : isMediumScreen
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} labelDirection="right"/>;
              })}
            </div>
          ) : (
            <>
              <div
               
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return <NavButton key={btn.label} x="0" y="0" {...btn} labelDirection="right" />;
                })}
              </div>

              <div
          
                
                
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x="0"
                        y="0"
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </div>
            </>
          );
        }}
      
        </ResponsiveComponent>
    </div>
  )
}

export default Navigation