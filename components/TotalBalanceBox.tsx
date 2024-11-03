import React from "react";
import { formatAmount } from "../lib/utils";
import AnimatedCounter from "./AnimatedCounter";
import DoughChart from "./DoughChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        <DoughChart accounts={accounts}/>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>Bank Accounts: {totalBanks}</h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>Total current Balance</p>
          <div className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={totalCurrentBalance} />
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;