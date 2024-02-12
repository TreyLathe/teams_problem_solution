// Purpose: To handle the course page and its functionality
// get the course name and id from the api
// get all the students in the course
const getCourseDetails = async (courseId) => {
  try {
    // Get course details from the API
    const courseResponse = await fetch(`/api/courses/${courseId}`);
    const courseData = await courseResponse.json();

  const classname = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (classname && description) {
    const response = await fetch(`/api/courses`, {
      method: 'POST',
      body: JSON.stringify({ classname, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/courses');
    } else {
      alert('Failed to create courses');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id-del')) {
    const id = event.target.getAttribute('data-id-del');

    const response = await fetch(`/api/courses/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/courses');
    } else {
      alert('Failed to delete courses');
    }
  }
};


const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id-put')) {
    const id = event.target.getAttribute('data-id-put');

    const response = await fetch(`/api/courses/${id}`, {
      method: 'UPDATE',
    });

    if (response.ok) {
      document.location.replace('/courses');
    } else {
      alert('Failed to update courses');
    }
  }
};
document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

  document
  .querySelector('.project-list')
  .addEventListener('click', updateButtonHandler);
