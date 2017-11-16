'use strict';

function locationGenerator(event) {
  event.preventDefault();
  console.log(event);
  if (document.getElementById('chambers').checked){
    window.location.href = 'chambersbay.html';
  }
  if (document.getElementById('pointdefiance').checked){
    window.location.href = 'form.html';
  }
  if (document.getElementById('titlow').checked){
    window.location.href = 'titlow.html';
  }
}
document.getElementById('name-form').addEventListener('submit', locationGenerator);
