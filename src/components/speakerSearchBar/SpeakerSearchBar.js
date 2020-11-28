import React from 'react';

const SpeakerSearchBar = ({ setSearchQuery }) => (
  <div>
    <input
      type="search"
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  </div>
);

export default SpeakerSearchBar;
