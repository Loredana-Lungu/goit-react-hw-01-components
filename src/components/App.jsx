import React from 'react';
import Profile from './Profile';
import user from './user.json';
import Statistics from './Statistics';
import data from './data.json';
import FriendList from './FriendList';
import friends from './friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  const colorFunc = (event) => {
    const element = event.currentTarget;
    element.style.backgroundColor = getRandomColor();
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} colorFunc={colorFunc} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;