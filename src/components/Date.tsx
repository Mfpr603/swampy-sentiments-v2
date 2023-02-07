import React, { useState, useEffect } from 'react';
function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className='dateString'>{date.toDateString()}</h1>
    </div>
  );
}

export default CurrentDate;
