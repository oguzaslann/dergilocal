import axios from 'axios';

import * as actionTypes from './actionTypes';

const ROOT_URL = 'http://localhost:8000';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/getPosts`);

  return {
    type: actionTypes.FETCH_POSTS,
    payload: request,
  };
};

export const addPost = (type, values, callback) => {
  const request = axios
    .post(`${ROOT_URL}/add${type}`, values)
    .then(() => callback());

  return {
    type: actionTypes.ADD_POST,
    payload: request,
  };
};
