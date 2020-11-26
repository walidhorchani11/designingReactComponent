import React from 'react';

const SpeakerSearchBar = ({setSearchQuery}) => (
  <div>
    <input type="search" onChange={ (e) => {
      console.log('search typed.....');
      setSearchQuery(e.target.value);
      }
      }/>
  </div>
);

export default SpeakerSearchBar;
