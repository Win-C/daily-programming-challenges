"use strict";

// Given lists of integers: people, jobs, profits. Each person i in
// people have people[i] amount of strength, and performing job j
// requires jobs[j] amount of strength and nets profits[j] amount of profit.

// Given that each person can perform at most one job, although a job
// can be assigned to more than one person, return the maximum amount
// of profit we can attain. 

// Example
//    people = [5, 7, 8]
//    jobs = [6, 5, 8]
//    profits = [1, 2, 3]
// returns => 7

// Solutions:
//    1) Sort jobs based on strength and store along with profits then
//       for each person find the suitable job that matches strength
//       condition with max profit
//    2) Dynamic programming - use an array to store max level of profits
//       at each threshold

/** Function finds the most profitable jobs for each person
 * 
 * @param {*} people array where each index is a person's strength
 * @param {*} jobs array with required strength for each job j
 * @param {*} profits array of profit generated for each job j
 * @returns max profit from matching jobs with people
 * 
 * Time complexity: O(N) which is the length of the array
 * Space complexity: O(N) for creating the DP maxProfit array
 */
function findMostProfits(people, jobs, profits){
  // Get length needed for dynamic programming array
  let length = 0;
  for (let job of jobs){
    length = Math.max(job, length);
  }

  // Use DP array to store max level of profits at each strength threshold
  let maxProfit = new Array(length + 1);
  for(let i = 0; i < jobs.length; i++){
    const job = jobs[i];
    const profit = profits[i];

    maxProfit[job] = Math.max((maxProfit[job] || 0), profit);
  }

  // Fill in DP maxProfit array
  for (let i = 0; i < maxProfit.length; i++){
    maxProfit[i] = Math.max((maxProfit[i] || 0), (maxProfit[i - 1] || 0));
  }

  // Cumulatively sum up profits given each person's strength level
  let totalProfits = 0;
  for (let p of people){
    if (p > length){
      totalProfits += maxProfit[length];
    } else {
      totalProfits += maxProfit[p];
    }
  }

  return totalProfits;
}

// Test Case
const people = [5, 7, 8];
const jobs = [6, 5, 8];
const profits = [1, 2, 3];

console.assert(findMostProfits(people, jobs, profits) === 7);
