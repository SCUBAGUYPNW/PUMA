'use strict';

var observations = [];
function MakeInstance(time, gender, isYouth, box, landed, perched, roosting, foodcarrying, nestlingsobserved, nestlingsheard, juvenilereturns, comments) {
  this.time = time;
  this.gender = gender;
  this.isYouth = isYouth;
  this.box = box;
  this.landed = landed;
  this.perched = perched;
  this.roosting = roosting;
  this.foodcarrying = foodcarrying;
  this.nestlingsobserved = nestlingsobserved;
  this.nestlingsheard = nestlingsheard;
  this.juvenilereturns = juvenilereturns;
  this.comments = comments;
  observations.push(this);
}

function newInstanceSubmit(event) {
  event.preventDefault();
  console.log(event.target.elements);
  var time = new Date();
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
  var isYouth = false;
  if (isyouth.checked){
    isYouth = true;
  }
  var box = boxnumber.value;
  var landed = false;
  if (islanded.checked){
    landed = true;
  }
  var perched = false;
  if (isperched.checked){
    perched = true;
  }
  var roosting = false;
  if (isroosting.checked) {
    roosting = true;
  }
  var foodcarrying = false;
  if (isfoodcarrying.checked) {
    foodcarrying = true;
  }
  var nestlingsobserved = false;
  if (isnestlingsobserved.checked){
    nestlingsobserved = true;
  }
  var nestlingsheard = false;
  if (isnestlingsheard.checked){
    nestlingsheard = true;
  }
  var juvenilereturns = false;
  if (isjuvenilereturns.checked){
    juvenilereturns = true;
  }
  var comments = '';

  new MakeInstance (time, gender, isYouth, box, landed, perched, roosting, foodcarrying, nestlingsobserved, nestlingsheard, juvenilereturns, comments);
};
document.getElementById('puma-form').addEventListener('submit', newInstanceSubmit);
