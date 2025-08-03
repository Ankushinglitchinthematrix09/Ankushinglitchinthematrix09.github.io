import React from 'react';
import Header from './components/Header';
import MainMessage from './components/MainMessage';
import WhyILoveYou from './components/WhyILoveYou';
import FavoriteMemories from './components/FavoriteMemories';
import OurSong from './components/OurSong';
import OurForever from './components/OurForever';
import SpecialNickname from './components/SpecialNickname';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <Header />
      <MainMessage />
      <WhyILoveYou />
      <FavoriteMemories />
      <OurSong />
      <OurForever />
      <SpecialNickname />
    </div>
  );
}

export default App;