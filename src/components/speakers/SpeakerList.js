import React, { useState } from 'react';

import withRequest from '../../hoc/withRequest';
import SpeakerItem from '../speaker/SpeakerItem';
import SpeakerSearchBar from '../speakerSearchBar/SpeakerSearchBar';
import { REQUEST_STATUS } from '../../reducers/request';
import { signInWithGoogle } from '../../../firebase/firebase.utils';

const SpeakerList = ({ status, speakers, put }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFavorite = async (speakerToUpdate) => {
    put({
      ...speakerToUpdate,
      isFavorite: !speakerToUpdate.isFavorite,
    });
  };

  return (
    <div>
      {status === REQUEST_STATUS.LOADING && <div>Loading...</div>}
      {status === REQUEST_STATUS.ERROR && <div>Error</div>}
      {status === REQUEST_STATUS.SUCCESS && (
        <div>
          <SpeakerSearchBar setSearchQuery={setSearchQuery} />
          {speakers
            ?.filter((item) => {
              const x = `${item.name} ${item.id}`.toLowerCase();
              if (x.includes(searchQuery.toLowerCase())) {
                return item;
              }
            })
            .map((item) => (
              <SpeakerItem
                key={item.id}
                speaker={item}
                toggleFavorite={toggleFavorite}
              />
            ))}
          <button onClick={signInWithGoogle}> Google </button>
        </div>
      )}
    </div>
  );
};

export default withRequest('http://localhost:4000', 'speakers')(SpeakerList);
