import axios from 'axios';
import { SEARCH_USERS, USER_DETAILS } from '../actionTypes/index';

export function searchGithubUser(username) {
  return dispatch => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then(response => response.data)
      .then(json => {
        dispatch({ type: SEARCH_USERS, payload: json });
      });
  };
}

export function getUserDetails(username, repositoryName) {
  return dispatch => {
    return axios.get(`https://api.github.com/repos/${username}/${repositoryName}`)
      .then(response => response.data)
      .then(json => {
        dispatch({ type: USER_DETAILS, payload: json });
      });
  };
}

export function resetUserDetails() {
  return {
    type: USER_DETAILS,
    payload: {}
  };
}

