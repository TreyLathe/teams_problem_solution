

// Function to form teams based on student preferences
function formTeams(students) {
  const teamCount = 4; // 4 teams
  const teamSizes = [4, 4, 4, 4]; // Team sizes, with one team having 4 members
  const teams = Array.from({ length: teamCount }, () => []);

  // Helper function to find the next available team index
  function findNextAvailableTeam() {
      for (let i = 0; i < teamCount; i++) {
          if (teams[i].length < teamSizes[i]) {
              return i;
          }
      }
      return -1; // No available team found
  }

  // Shuffle the students randomly to break ties
  students.sort(() => Math.random() - 0.5);

  // Create a map to keep track of students who have been assigned
  const assignedStudents = new Set();

  // Iterate through students' preferences to assign mutually preferred students within their top three choices
  for (const student of students) {
      if (assignedStudents.has(student.name)) {
          // This student has already been assigned to a team, skip to the next student
          continue;
      }

      let preferenceIndex = 0;
      let assigned = false;
      let topThreePreferences = student.preferences.slice(0, 3); // Get the top three preferences

      // Start a loop that continues until the student is assigned to a team or all top three preferences have been checked
      while (!assigned && preferenceIndex < topThreePreferences.length) {
          const preferredStudentName = topThreePreferences[preferenceIndex];
          const preferredStudent = students.find((s) => s.name === preferredStudentName);

          if (preferredStudent && !assignedStudents.has(preferredStudentName)) {
              const teamIndex = findNextAvailableTeam();

              if (teamIndex !== -1) {
                  // Add the current student to the team
                  teams[teamIndex].push(student);
                  // Add the preferred student to the team
                  teams[teamIndex].push(preferredStudent);
                  // Mark the current student and the preferred student as assigned
                  assignedStudents.add(student.name);
                  assignedStudents.add(preferredStudentName);
                  // Set the assigned flag to true to break the loop
                  assigned = true;
              }
          }

          preferenceIndex++;
      }
  }

  // Now, let's assign the remaining unassigned students to the remaining teams based on their lower preferences
  const remainingStudents = students.filter((student) => !assignedStudents.has(student.name));
  let remainingTeamIndex = 0;

  // Iterate through the remaining students and assign them to the remaining teams
  for (const student of remainingStudents) {
      const teamIndex = findNextAvailableTeam();
      // Find the index of the next available team
      if (teamIndex !== -1) {
          teams[teamIndex].push(student);
          assignedStudents.add(student.name);
      } else {
          // All teams are full, break the loop
          break;
      }
  }

  return teams;
}


// Array of student names and their preferences
  const students = [
            {
              name: 'Luke Skywalker',
              preferences: ['Master Yoda', 'Leia Organa', 'Han Solo', 'Obiwan Kenobi', 'R2D2'],
            },
            {
              name: 'Leia Organa',
              preferences: ['Han Solo', 'C3PO', 'Wicket', 'Luke Skywalker', 'Chewbacca'],
            },
            {
                name: 'Han Solo',
                preferences: ['Chewbacca', 'Leia Organa', 'Luke Skywalker', 'Lando Calrissian', 'Jek Porkins'],
              },
            {
                name: 'Master Yoda',
                preferences: ['Luke Skywalker', 'Obiwan Kenobi', 'Leia Organa', 'Mon Mothma', 'Wicket'],
              },
              {
                name: 'ObiWan Kenobi',
                preferences: ['Luke Skywalker', 'Master Yoda', 'Leia Organa', 'r2d2', 'Admiral Ackbar'],
              },
              {
                name: 'r2d2',
                preferences: ['c3po', 'Luke Skywalker', 'Leia Organa', 'Han Solo', 'Master Yoda'],
              },
              {
                name: 'c3po',
                preferences: ['r2d2', 'Luke Skywalker', 'Han Solo', 'Wicket', 'Chewbacca'],
              },
              {
                name: 'Wicket',
                preferences: ['Chewbacca', 'Leia Organa', 'Luke Skywalker', 'Han Solo', 'r2d2'],
              },
              {
                name: 'Chewbacca',
                preferences: ['Han Solo', 'Luke Skywalker', 'Leia Organa', 'c3po', 'Wicket'],
              },
              {
                name: 'Admiral Ackbar',
                preferences: ['Mon Mothma','Leia Organa', 'Luke Skywalker', 'Han Solo', 'Master Yoda'],
              },
              {
                name: 'Darth Vader',
                preferences: ['Luke Skywalker', 'Leia Organa', 'Master Yoda', 'Mon Mothma', 'Admiral Ackbar'],
              },
              {
                name: 'Mon Mothma',
                preferences: ['Admiral Ackbar', 'Leia Organa', 'Master Yoda', 'Obiwan Kenobi', 'c3po'],
              },
              {
                name: 'Lando Calrissian',
                preferences: ['Han Solo', 'Chewbacca', 'Luke Skywalker', 'Leia Organa', 'r2d2'],
              },
              {
                name: 'Boba Fett',
                preferences: ['Jabbathe Hutt', 'Lando Calrissian', 'Darth Vader', 'Han Solo', 'c3po'],
              },
              {
                name: 'Jabbathe Hutt',
                preferences: ['Boba Fett', 'Leia Organa', 'Han Solo', 'Darth Vader', 'Luke Skywalker'],
              },
              {
                name: 'Jek Porkins',
                preferences: ['Luke Skywalker', 'Admiral Ackbar', 'Han Solo', 'Leia Organa', 'Mon Mothma'],
              },
          ];
  
  // Form teams based on preferences
  const teams = formTeams(students);
  
  // Print the resulting teams
  for (let i = 0; i < teams.length; i++) {
    console.log(`Team ${i + 1}:`);
    for (const student of teams[i]) {
      console.log(`- ${student.name}`);
    }
  }

  // Export the formTeams and students  for testing
module.exports = {
  formTeams,
  students
};