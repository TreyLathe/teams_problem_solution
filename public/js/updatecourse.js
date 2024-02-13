const updateCourse = async (event) => {
    event.preventDefault();

    
  const projectNameEl = document.querySelector('#project-name');
  const projectname = projectNameEl.value.trim();
  const id = projectNameEl.getAttribute('data-id');
  const projectDescEl = document.querySelector('#project-desc').value.trim();
console.log(projectname, projectDescEl, id);

if (projectname && projectDescEl) {
    const response = await fetch(`/api/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ projectname, projectDescEl }),
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
