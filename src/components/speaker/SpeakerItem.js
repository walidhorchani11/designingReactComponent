import React from 'react';

import SpeakerFavoriteButton from '../speakerFavoriteButton/SpeakerFavoriteButton';
import SpeakerImg from '../speakerImg/SpeakerImg';

export default function SpeakerItem({ speaker, toggleFavorite }) {
  return (
    <div>
      <h1>{speaker.name}</h1>
      <SpeakerFavoriteButton
        isFavorite={speaker.isFavorite}
        toggleFavorite={toggleFavorite}
        speaker={speaker}
      />
      <SpeakerImg source={speaker.image} />
    </div>
  );
}
