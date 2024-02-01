// Function to form teams based on student preferences
function formTeams(students) {
    const teamCount = 5; // 5 teams
    const teamSizes = [4, 3, 3, 3, 3]; // Team sizes, with one team having 4 members
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
  
    // Iterate through students' preferences
    for (const student of students) {
      let preferenceIndex = 0;
      let assigned = false;
  
      while (!assigned && preferenceIndex < student.preferences.length) {
        const preferredStudentName = student.preferences[preferenceIndex];
        const preferredStudent = students.find((s) => s.name === preferredStudentName);
  
        if (preferredStudent) {
          const teamIndex = findNextAvailableTeam();
  
          if (teamIndex !== -1) {
            teams[teamIndex].push(student);
            assigned = true;
          }
        }
  
        preferenceIndex++;
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