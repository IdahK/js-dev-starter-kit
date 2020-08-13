import './index.css';  //this will be implemented by Webpack as a function
import {getUsers, deleteUser} from './api/userApi';

//Populate table of users via API call
getUsers().then(result => {

  let usersBody = "";

  result.forEach(user => {
    usersBody+= `
    <tr>
    <td><a href = "#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>
     `
  });

  global.document.getElementById('users').innerHTML=usersBody;

  //gets references for all the delete anchor tags/links from the page
  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  //Iterate the delete links = deleteLinks
  //Attach a click function to each delete link  with no change to the url
  //Remove the table row of that Delete Link from the DOM
  Array.from(deleteLinks, link => {
    link.onclick = function(event){
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });

});




// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0,0.00');
// //debugger;
// console.log(`I would pay ${courseValue} for this awesome course`);
