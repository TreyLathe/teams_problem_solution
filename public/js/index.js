//changes to make. Database with tables of classes, students and preferences.
//formteams function will be called from class database, class
//the instructor chooses, which will give the list
//of (and number) students  and from there map their preferences.
//Change function to divide students (as equally as possible)  into a number of teams
//the instructor inputs
// students put in preference 1-5 of the students they want to work with and this goes
//to the database table of preferences.

// Function to form teams based on student preferences
async function formTeams(students) {
    // const teamCount = 4; // 4 teams  //number of teams the instructor has chosen.
    // const teamSizes = [4, 4, 4, 4]; // Team sizes, move this to a function that divides classes equally into
    const students = await db.query('SELECT * FROM students');
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
  
      // Initialize variables for preference index, assigned flag, and top three preferences
      let preferenceIndex = 0; // Index to track the current preference being checked
      let assigned = false; // Flag to indicate if the student has been assigned to a team
      let topThreePreferences = student.preferences.slice(0, 3); // Get the top three preferences of the student
      // Start a loop that continues until the student is assigned to a team or all top three preferences have been checked
      // Loop through the top three preferences of the current student
      while (!assigned && preferenceIndex < topThreePreferences.length) {
        // Get the name of the preferred student at the current preference index
        const preferredStudentName = topThreePreferences[preferenceIndex];
        // Find the preferred student object from the students array
        const preferredStudent = students.find(
          (s) => s.name === preferredStudentName
        );
  
        // Check if there is a preferred student and the preferred student has not been assigned yet
        if (preferredStudent && !assignedStudents.has(preferredStudentName)) {
          // Find the index of the next available team
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
    const remainingStudents = students.filter(
      (student) => !assignedStudents.has(student.name)
    );
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
  // 
  // Array of student names and their preferences. move this to the database
  // const students = [
  //   {
  //     //1
  //     name: "Luke Skywalker",
  //     preferences: [
  //       "Master Yoda", //4
  //       "Leia Organa",//2
  //       "Han Solo",//3
  //       "Obiwan Kenobi",//5
  //       "R2D2",//6
  //     ],
  //   },
  //   { //2
  //     name: "Leia Organa",
  //     preferences: ["Han Solo", "C3PO", "Wicket", "Luke Skywalker", "Chewbacca"],
  //   },
  //   { //3
  //     name: "Han Solo",
  //     preferences: [
  //       "Chewbacca",//9
  //       "Leia Organa",//2
  //       "Luke Skywalker",//1
  //       "Lando Calrissian",//13
  //       "Jek Porkins",//16
  //     ],
  //   },
  //   { //4
  //     name: "Master Yoda",
  //     preferences: [
  //       "Luke Skywalker",//1
  //       "Obiwan Kenobi",//5
  //       "Leia Organa",//2
  //       "Mon Mothma",//12
  //       "Wicket",//8
  //     ],
  //   },
  //   {   //5
  //     name: "ObiWan Kenobi",
  //     preferences: [
  //       "Luke Skywalker",//1
  //       "Master Yoda",//4
  //       "Leia Organa",//2
  //       "r2d2",//6
  //       "Admiral Ackbar",//10
  //     ],
  //   },
  //   { //6
  //     name: "r2d2",
  //     preferences: [
  //       "c3po",//7
  //       "Luke Skywalker",//1
  //       "Leia Organa",//2
  //       "Han Solo",//3
  //       "Master Yoda",//4
  //     ],
  //   },
  //   { //7
  //     name: "c3po",
  //     preferences: 
  //     ["r2d2", //6
  //     "Luke Skywalker", //1
  //     "Han Solo", //3
  //     "Wicket", //8
  //     "Chewbacca"],//9
  //   },
  //   { //8
  //     name: "Wicket",
  //     preferences: [
  //       "Chewbacca",//9
  //       "Leia Organa",//2
  //       "Luke Skywalker",//1
  //       "Han Solo",//3
  //       "r2d2",// 6
  //     ],
  //   },
  //   {   //9
  //     name: "Chewbacca",
  //     preferences: [
  //       "Han Solo",//3
  //       "Luke Skywalker",//1
  //       "Leia Organa",//  2
  //       "c3po",// 7
  //       "Wicket",//8
  //     ],
  //   },
  //   { //10
  //     name: "Admiral Ackbar",
  //     preferences: [
  //       "Mon Mothma",//12
  //       "Leia Organa",//2
  //       "Luke Skywalker",//1
  //       "Han Solo",//3
  //       "Master Yoda",//  4
  //     ],
  //   },
  //   { //11
  //     name: "Darth Vader",
  //     preferences: [
  //       "Luke Skywalker",//1
  //       "Leia Organa",//2
  //       "Master Yoda",//4
  //       "Mon Mothma",//12
  //       "Admiral Ackbar",// 10
  //     ],
  //   },
  //   { //12
  //     name: "Mon Mothma",
  //     preferences: [
  //       "Admiral Ackbar",//10
  //       "Leia Organa",//2
  //       "Master Yoda",//4
  //       "Obiwan Kenobi",  //5
  //       "c3po",//7
  //     ],
  //   },
  //   { //13
  //     name: "Lando Calrissian",
  //     preferences: [
  //       "Han Solo",//3
  //       "Chewbacca",//9
  //       "Luke Skywalker",//1
  //       "Leia Organa",//2
  //       "r2d2",//6
  //     ],
  //   },
  //   { //14
  //     name: "Boba Fett",
  //     preferences: [
  //       "Jabbathe Hutt",//15
  //       "Lando Calrissian",//13
  //       "Darth Vader",//11
  //       "Han Solo",//3
  //       "c3po",// 7
  //     ],
  //   },
  //   { //15
  //     name: "Jabbathe Hutt",
  //     preferences: [
  //       "Boba Fett",//14
  //       "Leia Organa",//2
  //       "Han Solo",// 3
  //       "Darth Vader",//11
  //       "Luke Skywalker",//1
  //     ],
  //   },
  //   { //16
  //     name: "Jek Porkins",
  //     preferences: [
  //       "Luke Skywalker",//1
  //       "Admiral Ackbar",// 10
  //       "Han Solo",//3
  //       "Leia Organa",//2
  //       "Mon Mothma",//12
  //     ],
  //   },
  // ];
  
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
    students,
  };
  