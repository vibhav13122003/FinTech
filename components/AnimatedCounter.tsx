"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <span className="mr-1">INR</span> 
      <CountUp
        start={0}
        end={amount}
        duration={1.8}
        delay={0}
        separator=',' // Optional: separator for large numbers
      />
    </div>
  );
};

export default AnimatedCounter;
