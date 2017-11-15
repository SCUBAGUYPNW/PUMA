'use strict';

function nameGenerator(event) {
  var username = event.target.email.value;
  localStorage.setItem('user name', username);
}
document.getElementById('name-form').addEventListener('submit', nameGenerator);
