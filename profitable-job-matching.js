"use strict";

/** PROBLEM: You are given lists of integers: people, jobs, profits.
 *  Each person i in people have people[i] amount of strength, and
 *  performing job j requires jobs[j] amount of strength and nets
 *  profits[j] amount of profit.
 * 
 *  Given that each person can perform at most one job, although
 *  a job can be assigned to more than one person, return the 
 *  maximum amount of profit we can attain.
 * 
 *  Example:
 *    - people = [5, 7, 8]
 *    - jobs = [3, 5, 8]
 *    - profits = [1, 2, 3]
 */


/** Function uses dynamic programming approach to find max profits
 *  
 *  Time complexity of O(N + M + P) where 
 *    - N is the length of the jobs array
 *    - M is the length of the dynamic programming array
 *    - P is the length of the people array
 * 
 *  Space complexity of O(M) the length of the dynamic programming array
 */
function getMaxProfits(people, jobs, profits){
  // Get max length needed for the dynamic programming array
  let max = 0;
  for(let job of jobs){
    max = Math.max(job, max);
  }

  // Use array to store max level of profits at each strength threshold
  let maxProfit = new Array(max + 1);
  for (let i = 0; i < jobs.length; i++){
    const job = jobs[i];
    const profit = profits[i];

    maxProfit[job] = Math.max((maxProfit[job] || 0), profit);
  }

  // Fill in maxProfit array
  for (let i = 1; i < maxProfit.length; i++){
    maxProfit[i] = Math.max((maxProfit[i] || 0), (maxProfit[i - 1] || 0));
  }

  // Cumulatively sum up profits given each person's strength level
  let totalProfits = 0;
  for(let i = 0; i < people.length; i++){
    const strength = people[i];

    if (strength > max){
      totalProfits += maxProfit[max];
    } {
      totalProfits += maxProfit[strength];
    }
  }
  return totalProfits;
}
