import React from "react";
import HeaderBox from "../../components/HeaderBox";

import TotalBalanceBox from "../../components/TotalBalanceBox";
import RightSidebar from "../../components/RightSidebar";

const Home = () => {
  const loggedIn = { firstName: "Vibhav", lastName: "Bhartiya",email: "vibhavbhartiya@me.com" };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || "Guest"}
            subtext='Access and Manage Your Account'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={12000}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:12000},{currentBalance:1000}]} />
    </section>
  );
};

export default Home;
