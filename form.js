'use strict';

var observations = [];
function MakeInstance(id, gender, isYouth, box, landed, perched, roosting, foodcarrying, nestlingsobserved, nestlingsheard, juvenilereturns, comments) {
  this.id = id;
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
  var id;
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
  var isYouth;
  if (isyouth.checked){
    isYouth = true;
  }
  var box = boxnumber.value;
  var landed;
  if (islanded.checked){
    landed = true;
  }
  var perched;
  if (isperched.checked){
    perched = true;
  }
  var roosting;
  if (isroosting.checked) {
    roosting = true;
  }
  var foodcarrying;
  if (isfoodcarrying.checked) {
    foodcarrying = true;
  }
  var nestlingsobserved;
  if (isnestlingsobserved.checked){
    nestlingsobserved = true;
  }
  var nestlingsheard;
  if (isnestlingsheard.checked){
    nestlingsheard = true;
  }
  var juvenilereturns;
  if (isjuvenilereturns.checked){
    juvenilereturns = true;
  }
  var comments;

  new MakeInstance (id, gender, isYouth, box, landed, perched, roosting, foodcarrying, nestlingsobserved, nestlingsheard, juvenilereturns, comments);
};
document.getElementById('puma-form').addEventListener('submit', newInstanceSubmit);
