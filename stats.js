const { formTeams, students } = require('./indexcopy'); // Assuming formTeams is exported from server.js

// Initialize a map to store the count of times each pair of students is on the same team
const pairCounts = new Map();

// Run the formTeams function 1,000 times
for (let i = 0; i < 1000; i++) {
  const studentsCopy = JSON.parse(JSON.stringify(students)); // Create a deep copy of the students array
  const teams = formTeams(studentsCopy); // Pass the copy to the formTeams function

  // For each team, update the count for each pair of students
  for (const team of teams) {
    for (let j = 0; j < team.length; j++) {
      for (let k = j + 1; k < team.length; k++) {
        // Sort the student names so that the pair is always in the same order
        const pair = [team[j].name, team[k].name].sort().join('-');

        // Update the count for this pair
        pairCounts.set(pair, (pairCounts.get(pair) || 0) + 1);
      }
    }
  }
}

// Sort the pairCounts map in descending order based on the count
const sortedPairCounts = new Map([...pairCounts.entries()].sort((a, b) => b[1] - a[1]));

// Print the statistics in descending order
for (const [pair, count] of sortedPairCounts) {
  console.log(`${pair}: ${count} times`);
}