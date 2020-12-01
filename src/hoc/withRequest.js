import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import reducerRequest, { REQUEST_STATUS } from '../reducers/request';
import {
  GET_ALL_FAIL,
  GET_ALL_SUCCESS,
  PUT_SUCCESS,
  PUT_FAIL,
} from '../actions/request';

const withRequest = (baseUrl, routeName) => (Component) => () => {
  const [{ status, records: speakers }, dispatch] = useReducer(reducerRequest, {
    records: [],
    status: REQUEST_STATUS.LOADING,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:4000/speakers');
        const response = await axios.get(`${baseUrl}/${routeName}`);
        dispatch({ type: GET_ALL_SUCCESS, records: response.data });
      } catch (error) {
        dispatch({ type: GET_ALL_FAIL });
      }
    };
    fetchData();
  }, []);

  const props = {
    status,
    speakers,
    put: async (speakerUpdated) => {
      try {
        await axios.put(
          `http://localhost:4000/speakers/${speakerUpdated.id}`,
          speakerUpdated
        );
        dispatch({
          type: PUT_SUCCESS,
          id: speakerUpdated.id,
          record: speakerUpdated,
        });
      } catch (error) {
        dispatch({ type: PUT_FAIL });
      }
    },
  };

  return <Component {...props}></Component>;
};

export default withRequest;
