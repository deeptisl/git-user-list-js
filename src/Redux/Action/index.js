import axios from 'axios';
import * as actionTypes from "../ActionType/index";

export function searchGithubUser(username) {
  return dispatch => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then(response => response.data)
      .then(json => {
        dispatch({ type: actionTypes.SEARCH_USERS, payload: json });
      });
  };
}

export function getUserDetails(username, repositoryName) {
  return dispatch => {
    return axios.get(`https://api.github.com/repos/${username}/${repositoryName}`)
      .then(response => response.data)
      .then(json => {
        dispatch({ type: actionTypes.USER_DETAILS, payload: json });
      });
  };
}

export function resetUserDetails() {
  return {
    type: actionTypes.USER_DETAILS,
    payload: {}
  };
}

