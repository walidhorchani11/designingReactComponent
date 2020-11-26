import React from 'react';

import Header from '../../src/components/header/Header';
import Menu from '../../src/components/menu/Menu';
import Filter from '../../src/components/filter/Filter';
import Speakers from '../../src/components/speakers/SpeakerList';
import Footer from '../../src/components/footer/Footer';

const SpeakersPage = () => {
  const s = <Speakers />;
  return (
    <div>
      <Header />
      <Menu />
      <Filter />
      {s}
      <Footer />
    </div>
  );
};

export default SpeakersPage;
