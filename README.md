# Course Management
Table of Contents:
- [User Story](#user-story)
- [Resources Used & Credits](#resources-user--credits)
- [Relevant Links](#relevant-links)
- [Screenshots & Screencasts](#screenshots--screencasts)
- [Usage and Comments](#usage--comments)
- [Future Direction and Contributing](#future-directions-and-contributing)


## USER STORY:

As an instructor, I would like to be able to manage my students and courses, including added new, modifying, deleting and viewing them.

## RESOURCES USED && CREDITS:
- Various technologies for frontend and backend functionality
    - HTML, Javascript and CSS
    - Handlebars & Bulma
    - Mysql and Sequalize
    - Node.js and Express.js

- Work completed by:
    - Isis Martinez, github: isismar3
    - Bereket Beraki, github: bberaki2008
    - Warren (Trey) Lathe,  github: treylathe


## RELEVANT LINKS:
- Repository: https://github.com/TreyLathe/teams_problem_solution

- Deployed Site: https://coursemanagement-9c13757a824b.herokuapp.com/

## SCREENSHOTS &&/|| SCREENCASTS:

Slide Presentation: 
https://docs.google.com/presentation/d/1gFeTHr8PGsARlCIDdQEzzVycTIiUo5JtuyEE1I1De2g/edit?usp=sharing
Screencast:
https://app.screencastify.com/v3/watch/oaKXZZiyXNR7l97Snj51Screencast:



## USAGE && COMMENTS:

An instructor must first set up an account on the login if they don't already have one. Once logged in, three options are presented in the left navigation: Manage Students, Manage Courses, and Manage groups. 

Manage Students page will present a list of all students currently enrolled and a form to add a new student. Next to students' names are an edit and delete student icons. The instructor may add, edit or delete students here (though only students added by the instructor themselves can be removed). Additionally, clicking on a individual student link will take them to information about the student including any courses they might be registered for. 

Manage Courses page will present a list of all Courses currently offered and a form to add a new course. Next to courses' names are an edit and delete course icons. The instructor may add, edit or delete courses here. Additionally, clicking on a individual course link will take them to information about the course including description and students registered (tba). 

The third option, Manage groups, allows the instructor to create teams or groups within a single course for the purposes of dividing students up for teams, projects, study groups and more. Currently, this functionality is not fully developed (see below) but the page is included to give a general idea of results. 


## FUTURE DIRECTIONS AND CONTRIBUTING

- Team Creation functionality: 
Currently a command line script is included and hopes are to integrate it into the site functionality. Typing "node server.js' after necessary modules are install and the script will perform the following:
This script creates four teams of four students (though other permutations can be done). Each student's top five top preferences for other students to be on their team are entered (hardcorded currently, to be added through dynamic input). Starting at a random student, the code first finds all students that have each other as their number one preference. It then picks a student randomly to begin iterating through their top 3 preferences, then the other preferences next,  until all students have been placed in teams as close to their top choices as possible. This occasionally leaves one or two students without a team, so the script then places those students in the remaining open team(s). A stats.js script is included that will iterate through the teamcreator script 1,000 to test team formation.
Also add the ability to add skills to students and divide into teams by skill. 

- Student Profiles:
    The ability for students to login in and view courses available  those which they are registered for, and any future functionalities added. 

- Grade Management:
    The ability for instructors to add grades for individuals students and for students to view.

- Exam Management:
    The ability for instructors to submit exam questions and students to answer. 
    One aspect of this might be a 'mastery' type quiz system using a modified/simplified space repetition. Instructor inputs a specific number of test questions for an entire run of a course, divided by levels (for example, 100 questions divided into 10 level groups). WHen students first take the quiz, the first number of questions are presented (10 in this example). The next time the student takes the quiz it offers them any questions they got wrong the first time, a small number of randomly questions they got right and a select number (to fill out 10 questions in this example) from the next level. A student can take the test as often as they wish (though the recommendation is at least 24hr separation), iterating through the questions as ones they know well are dropped and new ones added. 

For contributing, help with integration of the team creation script into the interface is sought. 




