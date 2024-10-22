"use client";
import React, { useEffect } from 'react'

const createFireFly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,  
});



const FireFliesBackground = () => {

    const [fireFlies, setFireFlies] = React.useState<{ id: number; top: string; left: string; animationDuration: string; }[]>([]);

    useEffect(() => {
        const addFireFlyPeriodically = () => {
           const newFireFly = createFireFly();
              setFireFlies((prevFireFlies) => [...prevFireFlies.slice(-14), newFireFly]);
        }

        const interval = setInterval(addFireFlyPeriodically, 1000);
        
        return () => clearInterval(interval);


    }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
        {fireFlies.map((fireFly) => (
            <div
                key={fireFly.id}
                className='absolute w-[10px] h-[10px]  rounded-full bg-firefly-radial'
                style={{
                    top: fireFly.top,
                    left: fireFly.left,
                    animation: `move ${fireFly.animationDuration} infinite alternate`,
                }}
            />
        ))}
        </div>
  )
}

export default FireFliesBackground