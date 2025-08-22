import React, { useRef, useEffect } from 'react';

function MyForm() {
  const inputRef = useRef(null); // Initialize the ref with null

  useEffect(() => {
    // Check if the ref is attached to a DOM element before accessing .current
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" ref={inputRef} /> {/* Attach the ref to the input element */}
      <button>Submit</button>
    </div>
  );
}

export default MyForm;