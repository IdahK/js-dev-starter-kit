import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
/* eslint-disable no-console*/

const baseUrl = getBaseUrl();

//the public function
export function getUsers(){
  return get('users');
}

function get(url){
  //change url based on environment: dev or production
  // return fetch(url).then(onSuccess, onError);

  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

//handles errors
function onError(error){
  console.log(error);
}
