// Purpose: To handle the course page and its functionality
// get the course name and id from the api
// get all the students in the course
const getCourseDetails = async (courseId) => {
  try {
    // Get course details from the API
    const courseResponse = await fetch(`/api/courses/${courseId}`);
    const courseData = await courseResponse.json();

    // Get students in the course from the API
    const studentsResponse = await fetch(`/api/courses/${courseId}/students`);
    const studentsData = await studentsResponse.json();

    // Extract the required information
    const courseId = courseData.id;
    const courseDescription = courseData.description;
    const studentList = studentsData.map((student) => student.name);

    // Return the course details
    return {
      id: courseId,
      description: courseDescription,
      students: studentList,
    };
  } catch (error) {
    console.error('Failed to get course details:', error);
    return null;
  }
};

//



  



// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const classname = document.querySelector('#project-name').value.trim();
//   //const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (classname && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ classname, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/course');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/course');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
