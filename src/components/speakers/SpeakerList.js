import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import SpeakerItem from '../speaker/SpeakerItem';
import SpeakerSearchBar from '../speakerSearchBar/SpeakerSearchBar';
import {
  GET_ALL_FAIL,
  GET_ALL_SUCCESS,
  PUT_SUCCESS,
  PUT_FAIL,
} from '../../actions/request';
import reducerRequest, { REQUEST_STATUS } from '../../reducers/request';

const SpeakerList = () => {
  const [{ status, records: speakers }, dispatch] = useReducer(reducerRequest, {
    records: [],
    status: REQUEST_STATUS.LOADING,
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/speakers');
        dispatch({ type: GET_ALL_SUCCESS, records: response.data });
      } catch (error) {
        dispatch({ type: GET_ALL_FAIL });
      }
    };
    fetchData();
  }, []);

  const toggleFavorite = async (id) => {
    try {
      const speakerToModify = speakers.find((speaker) => speaker.id === id);
      const speakerUpdated = {
        ...speakerToModify,
        isFavorite: !speakerToModify.isFavorite,
      };
      await axios.put(`http://localhost:4000/speakers/${id}`, speakerUpdated);
      dispatch({ type: PUT_SUCCESS, id: id, record: speakerUpdated });
    } catch (error) {
      dispatch({ type: PUT_FAIL });
    }
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
        </div>
      )}
    </div>
  );
};

export default SpeakerList;
