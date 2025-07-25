import React from 'react';

function Box({ children, className = '' }) {
 return (
    <div className={`rounded shadow ${className}`}>
      {children}
    </div>
  );
}

export default Box;
