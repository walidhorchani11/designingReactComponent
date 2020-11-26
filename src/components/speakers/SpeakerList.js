import React, { useState } from 'react';

import SpeakerItem from '../speaker/SpeakerItem';

const data = [
  {
    id: '1',
    name: 'John',
    isFavorite: false,
    image: '/static/a.jpg',
  },
  {
    id: '2',
    name: 'walid',
    isFavorite: false,
    image: '/static/z.jpg',
  },
];

const SpeakerList = () => {
  const [speakers, setSpeakers] = useState(data);
  const toggleFavorite = (id) => {
    console.log('toggle favorite is clicked:', id);
    setSpeakers(() => {
      const n = speakers.filter((speaker) => {
        if (speaker.id == id) {
          return { ...speaker, isFavorite: true };
        } else {
          return speaker;
        }
      });
      return n;
    });
  };
  return (
    <ul>
      {speakers?.map((item) => (
        <SpeakerItem
          key={item.id}
          speaker={item}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
};

export default SpeakerList;
