/**
 * Custom Hooks: Reusing Logic across Components.
 * This file teaches how to extract component logic into a reusable function (useWindowSize).
 */

import React, { useState, useEffect } from 'react';

// --- Custom Hook Definition ---
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures this only runs on mount/unmount

  return windowSize;
}

// --- Component using the Custom Hook ---
const WindowDimension = () => {
  const { width, height } = useWindowSize();

  return (
    <div style={{ padding: '20px', border: '2px dashed blue' }}>
      <h2>Custom Hook: useWindowSize</h2>
      <p>Resize your browser window to see the update!</p>
      <p>Width: <strong>{width}px</strong></p>
      <p>Height: <strong>{height}px</strong></p>
    </div>
  );
};

export default WindowDimension;
