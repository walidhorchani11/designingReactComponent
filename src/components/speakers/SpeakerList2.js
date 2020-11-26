import React from 'react';

import SpeakerItem from './SpeakerItem';
import SpeakerSearchBar from './speakerSearchBar/SpeakerSearchBar';
import withData from '../../hoc/withData';

const SpeakerList = ({ data }) => {
  return (
    <div>
      <SpeakerSearchBar />
      <ul>
        {data?.map((item) => (
          <SpeakerItem key={Math.random()} speaker={item} />
        ))}
      </ul>
    </div>
  );
};

export default withData(3)(SpeakerList);
