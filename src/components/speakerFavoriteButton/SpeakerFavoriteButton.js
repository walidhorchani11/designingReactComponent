import React from 'react';

export default function SpeakerFavoriteButton({
  isFavorite,
  speaker,
  toggleFavorite,
}) {
  return (
    <div>
      <img
        src={isFavorite ? '/static/heartRed.png' : '/static/heartBlack.png'}
        onClick={toggleFavorite.bind(this, speaker)}
      />
    </div>
  );
}
