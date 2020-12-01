import {
  GET_ALL_FAIL,
  GET_ALL_SUCCESS,
  PUT_FAIL,
  PUT_SUCCESS,
} from '../actions/request';

export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export default (initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      return {
        ...initialState,
        status: REQUEST_STATUS.SUCCESS,
        records: action.records,
      };
    case GET_ALL_FAIL:
      return {
        ...initialState,
        status: REQUEST_STATUS.ERROR,
      };
    case PUT_SUCCESS:
      const { records } = initialState;
      const newRecords = records.map((record) => {
        if (record.id == action.id) {
          return action.record;
        } else {
          return record;
        }
      });
      return {
        ...initialState,
        status: REQUEST_STATUS.SUCCESS,
        records: newRecords,
      };
  }
};
