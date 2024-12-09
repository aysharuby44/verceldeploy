// ScrollEffect.js
import React, { useEffect, useState } from 'react';

const ScrollEffect = () => {
    const [scrollX, setScrollX] = useState(0);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrollX(scrollPosition * 0.5); // Adjust the multiplier to control the speed
    };

    // Add and remove event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <h1
                className="fixed top-1/4 transform transition-transform duration-300"
                style={{ left: `${scrollX}px` }} // Move the text horizontally based on scroll position
            >
                Scrolling Text Effect
            </h1>
        </div>
    );
};

export default ScrollEffect;
