'use strict';

var observations = [];
var x = 0;
function MakeInstance(time, box, gender, isYouth, landed, perched, roosting, foodcarrying, nestlingsobserved, nestlingsheard, juvenilereturns) {
  this.time = time;
  this.box = box;
  this.gender = gender;
  this.isYouth = isYouth;
  this.landed = landed;
  this.perched = perched;
  this.roosting = roosting;
  this.foodcarrying = foodcarrying;
  this.nestlingsobserved = nestlingsobserved;
  this.nestlingsheard = nestlingsheard;
  this.juvenilereturns = juvenilereturns;
  observations.push(this);
}

function newInstanceSubmit(event) {
  event.preventDefault();
  console.log(event.target.elements);
  var time = new Date();
  var box = boxnumber.value;
  var gender;
  if (male.checked){
    gender = 'Male';
  }
  if (female.checked){
    gender = 'Female';
  };
  if (unsure.checked){
    gender = 'Unsure';
  }
  var isYouth = '-';
  if (isyouth.checked){
    isYouth = 'X';
  }
  var landed = '-';
  if (islanded.checked){
    landed = 'X';
  }
  var perched = '-';
  if (isperched.checked){
    perched = 'X';
  }
  var roosting = '-';
  if (isroosting.checked) {
    roosting = 'X';
  }
  var foodcarrying = '-';
  if (isfoodcarrying.checked) {
    foodcarrying = 'X';
  }
  var nestlingsobserved = '-';
  if (isnestlingsobserved.checked){
    nestlingsobserved = 'X';
  }
  var nestlingsheard = '-';
  if (isnestlingsheard.checked){
    nestlingsheard = 'X';
  }
  var juvenilereturns = '-';
  if (isjuvenilereturns.checked){
    juvenilereturns = 'X';
  }

  new MakeInstance (time, box, gender, isYouth, landed, perched, roosting, foodcarrying, nestlingsobserved, nestlingsheard, juvenilereturns);
  var pumaList = document.getElementById('puma-list');
  if (x === 0){
    var trEl = document.createElement('tr');
    var keys = ['Time', 'Box Number', 'Gender', 'Youngling', 'Landed', 'Perched', 'Roosting', 'Food Carrying', 'Nestlings Observed', 'Nestlings Heard', 'Juvenile Returns'];
    for (var j = 0; j < keys.length; j++) {
      var thEl = document.createElement('th');
      thEl.textContent = keys[j];
      trEl.appendChild(thEl);
    }
    pumaList.appendChild(trEl);
  }
  var trEl = document.createElement('tr');
  for (var key in observations[x]){
    var tdEl = document.createElement('td');
    tdEl.textContent = observations[x][key];
    console.log(tdEl);
    trEl.appendChild(tdEl);
  }
  console.log(trEl);
  pumaList.appendChild(trEl);
  x++;
};
document.getElementById('puma-form').addEventListener('submit', newInstanceSubmit);
