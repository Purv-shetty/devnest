import { useEffect, useState } from "react";

interface WindowDimensions {
    width: number;
    height: number;
}

function useWindowDimensions() {
    // Initialize with default values (0) to avoid accessing window on the server side
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: 0,
        height: 0,
    });

    // Initialize isMobile with false, will be updated in the effect
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Calculate tab height based on isMobile
    const tabHeight = isMobile ? windowDimensions.height - 50 : windowDimensions.height;

    useEffect(() => {
        // This function will run only on the client side after component mounts
        const updateWindowDimensions = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial dimensions on mount
        updateWindowDimensions();

        // Add resize event listener
        window.addEventListener("resize", updateWindowDimensions);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    return { ...windowDimensions, isMobile, tabHeight };
}

export default useWindowDimensions;
