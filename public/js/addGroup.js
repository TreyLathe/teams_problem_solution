const newFormHandler = async (event) => {
  event.preventDefault();

  const group_name = document.querySelector('#groupname').
  value.trim();

  const group_id = 3;
  const student_id = 2;
  const course_id = 1;
  const project_name = document.querySelector('#projectname').value.trim();
  if (group_id && group_name && project_name && student_id && course_id) {
    const response = await fetch(`/api/groups`, {
      method: 'POST',
      body: JSON.stringify({ group_id, group_name, project_name, student_id, course_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/groups');
    } else {
      alert('Failed to add group');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id-del')) {
    const id = event.target.getAttribute('data-id-del');

    const response = await fetch(`/api/groups/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/groups');
    } else {
      alert('Failed to delete group');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
