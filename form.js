'use strict';

var observations = []
function MakeInstance(id, gender, isYouth, box, landed, perched, roosting, foodcarrying, nestlingsobserved, nestlingsheard, juvenilereturns, comments) {
  this.id = id;
  this.gender = gender;
  this.isYouth = false;
  this.box = box;
  this.landed = false;
  this.perched = false;
  this.roosting = false;
  this.foodcarrying = false;
  this.nestlingsobserved = false;
  this.nestlingsheard = false;
  this.juvenilereturns = false;
  this.comments = comments;
  observations.push(this);
}

function newInstanceSubmit(event) {
  event.preventDefault();
  console.log(event.target.elements);
  var id;
  var gender;
  if ()
  var isYouth;
  var box;
  var landed;
  var perched;
  var roosting;
  var foodcarrying;
  var nestlingsobserved;
  var nestlingsheard;
  var juvenilereturns;
  var comments;

  // new MakeInstance ()
};
document.getElementById('puma-form').addEventListener('submit', newInstanceSubmit);
