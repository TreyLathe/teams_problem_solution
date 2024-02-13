const newFormHandler = async (event) => {
  event.preventDefault();

  const classname = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
const user_id = document.querySelector('#user_id').value.trim();
  if (classname && description) {
    const response = await fetch(`/api/courses`, {
      method: 'POST',
      body: JSON.stringify({ classname, description, user_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/courses');
    } else {
      alert('Failed to create project');
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
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
