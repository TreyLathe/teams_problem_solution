const newFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector('#firstname').value.trim();
  const lastname = document.querySelector('#lastname').value.trim();

  if (firstname && lastname) {
    const response = await fetch(`/api/students`, {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/students');
    } else {
      alert('Failed to add student');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id-del')) {
    const id = event.target.getAttribute('data-id-del');

    const response = await fetch(`/api/students/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/students');
    } else {
      alert('Failed to delete student');
    }
  }
};

// const updateFormHandler = async (event) => {
//   event.preventDefault();

//     const firstname = document.querySelector('#firstname').value.trim();
//     const lastname = document.querySelector('#lastname').value.trim();

//     if (event.target.hasAttribute('data-id-put') && firstname && lastname) {
//     const id = event.target.getAttribute('data-id-put');
//     const response = await fetch(`/api/students/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ firstname, lastname, id}),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/students');
//     } else {
//       alert('Failed to update student');
//     }
//   }

// };
document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('submit', updateFormHandler);


