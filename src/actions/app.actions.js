import { SEND_REQUEST, RECEIVE_REQUEST } from '../constants/ActionTypes';

export function sendRequest() {
  return ({
    type: SEND_REQUEST,
  });
}

export function receiveRequest() {
  return ({
    type: RECEIVE_REQUEST,
  });
}