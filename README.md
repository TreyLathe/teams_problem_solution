# STUDENT TEAM SELECTOR
Table of Contents:
- [User Story/Challenge Goal](#user-storychallenge-goal)
- [Resources Used & Credits](#resources-user--credits)
- [Relevant Links](#relevant-links)
- [Screenshots & Screencasts](#screenshots--screencasts)
- [Usage and Comments](#usage--comments)
- [Future Direction and Contributing](#future-directions-and-contributing)
- [Tests](#tests)

## USER STORY/CHALLENGE GOAL:

As an instructor, I would like to divide my students up into teams using their preferences of who they'd like to be on their team in an efficient and fair manner.

## RESOURCES USED && CREDITS:
- Various codes (see below) using modified Gayle Shapley algorithm
- ChatGPT AI to help with issues surrounding requiring all students to be on a team


## RELEVANT LINKS:
- Repository: https://github.com/TreyLathe/teams_problem_solution

- Deployed Site:  N/A

## SCREENSHOTS &&/|| SCREENCASTS:


## USAGE && COMMENTS:
This algorithm, as of 30 Jan 2024, creates four teams of four students. Each student picks their five top preferences for other students to be on their team. The code first finds all students that have each other as their number one preference. It then picks a student randomly to begin iterating through their preferences until all students have been placed in teams as close to their top choices as possible. This occasionally leaves one or two students without a team, so the algorithm then places those students in the remaining open team. 

This is run through the command line. Make sure node is installed in the directory with server.js and when you are in your directory where server.js resides, in the command line type "node server.js"

## FUTURE DIRECTIONS AND CONTRIBUTING

-  create container arrays for students and student preferences
    - interface input for instructor to fill in array for students in class
    - interface for students to select themselves and fill in preferences in array
- add ability to instructor or student to forbid specific combinations
- interface for instructor to choose number of teams and number in each team
- improved algorithm for optimizing choices

If wish to contribute, request to be a contributor, clone repository and create a branch for one of the features above, once a pull request is made, it will be tested.


## TESTS

Currently, no Jest tests, console logs help with testing, type node server.js in appropriate directory to test functionality of application

