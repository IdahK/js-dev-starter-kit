import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
/* eslint-disable no-console*/

const baseUrl = getBaseUrl();

//the public function
export function getUsers(){
  return get('users');
}

//public function to delete users
export function deleteUser(id){
  return del(`users/${id}`);
}

function get(url){
  //change url based on environment: dev or production
  // return fetch(url).then(onSuccess, onError);

  return fetch(baseUrl + url).then(onSuccess, onError);
}

//handles all delete calls privately
function del(url){
  const request = new Request(baseUrl + url,{
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

//handles errors
function onError(error){
  console.log(error);
}
