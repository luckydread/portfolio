"use client";

import React, { useEffect } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = React.useState({});

    useEffect(() => {

        function getScreenSize() {
          return window.innerWidth;
        }

        function handleResize() {
          setScreenSize(getScreenSize());
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize',handleResize);

    }, []);

    return screenSize;
}

export default useScreenSize;