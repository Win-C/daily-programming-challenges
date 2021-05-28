"use strict";

// You are given a 2D integer list requested_trips containing
// [start_x, end_x, num_passengers], and an integer capacity.
// Each requested trip asks to pick up num_passengers passenger
// at start_x and drop them off at end_x. You also have a car 
// with the given capacity, and start at x = 0.

// Given that you'd like to pick up every passenger and can
// only move right, return whether you can pick up and drop
// off everyone. 

function isUberPoolPossible(trips, capacity){
  // create a timeMap hash table to store time and num of passengers
  // sort trips by start_x
  // iterate through trips
  // update numPassengers with passengers from timeMap given time
  // if numPassegners > capacity return false

  let numPassengers = 0;
  let timeMap = {};

  for(const [start, end, passengers] of trips){
    timeMap[start] = (timeMap[start] || 0) + passengers;
    timeMap[end] = (timeMap[end] || 0) - passengers;
  }

  let times = Object.keys(timeMap);
  times.sort((a, b) => a - b);

  for(let time of times){
    numPassengers += timeMap[time];
    if(numPassengers > capacity) return false;
  }

  return true;
}

const trips = [
  [1, 30, 2],
  [3, 5, 3],
  [5, 9, 3],
]
const capacity = 6;

console.assert(isUberPoolPossible(trips, capacity) === true);
