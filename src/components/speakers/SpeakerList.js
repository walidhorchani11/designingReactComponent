import React, { useState } from 'react';

import SpeakerItem from '../speaker/SpeakerItem';
import SpeakerSearchBar from '../speakerSearchBar/SpeakerSearchBar'

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
  {
    id: '3',
    name: 'aya',
    isFavorite: false,
    image: '/static/hd.jpg'
  }
];

const SpeakerList = () => {
  const [speakers, setSpeakers] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleFavorite = (id) => {
    console.log('toggle favorite is clicked:', id);
     setSpeakers((prevSpeakers) => {
       return prevSpeakers.map((speaker) => {
        if (speaker.id == id) {

          return { ...speaker, isFavorite: !speaker.isFavorite };
        } else {
          return speaker;
        }
      });
    });
  };
  return (
    <div>
      <SpeakerSearchBar setSearchQuery={setSearchQuery}  />
      {speakers?.filter((item) => {
        const x = `${item.name} ${item.id}`.toLowerCase();
        if(x.includes(searchQuery.toLowerCase())){
          return item;
        }
      }).map((item) => (
        <SpeakerItem
          key={item.id}
          speaker={item}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default SpeakerList;
