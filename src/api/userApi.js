import 'whatwg-fetch';

//the public function
export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

//handles errors
function onError(error){
  console.log(error);
}