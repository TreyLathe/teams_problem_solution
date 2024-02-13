const updateCourse = async (event) => {
    event.preventDefault();

    
  const projectNameEl = document.querySelector('#project-name');
  const classname = projectNameEl.value.trim();
  const id = projectNameEl.getAttribute('data-id');
  const description = document.querySelector('#project-desc').value.trim();
console.log(classname, description, id);

if (classname && description) {
    const response = await fetch(`/api/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ classname, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/courses');
    } else {
      alert('Failed to update course');
    }
  }

    }

document.querySelector('.update-course-form').addEventListener('submit', updateCourse);
