/* Checks the URL to determine if the app is running on dev or prod*/

export default function getBaseUrl(){
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '';;
}