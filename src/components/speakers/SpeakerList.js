import React, { useState, useEffect } from 'react';

import axios from 'axios';

import SpeakerItem from '../speaker/SpeakerItem';
import SpeakerSearchBar from '../speakerSearchBar/SpeakerSearchBar';

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const SpeakerList = () => {
  const [speakers, setSpeakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState(REQUEST_STATUS.LOADING);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/speakers');
        setSpeakers(response.data);
        setStatus(REQUEST_STATUS.SUCCESS);
      } catch (error) {
        setStatus(REQUEST_STATUS.ERROR);
      }
    };
    fetchData();
  }, []);

  const toggleFavorite = async (id) => {
    try {
      const speakerToModify = speakers.find((speaker) => speaker.id === id);
      await axios.put(`http://localhost:4000/speakers/${id}`, {
        ...speakerToModify,
        isFavorite: !speakerToModify.isFavorite,
      });
      setSpeakers((prevSpeakers) => {
        return prevSpeakers.map((speaker) => {
          if (speaker.id == id) {
            return { ...speaker, isFavorite: !speaker.isFavorite };
          } else {
            return speaker;
          }
        });
      });
    } catch (error) {
      setStatus(REQUEST_STATUS.ERROR);
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
