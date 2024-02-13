const updateStudent = async (event) => {
    event.preventDefault();

    
  const firstnameEl = document.querySelector('#firstname');
  const firstname = firstnameEl.value.trim();
  const id = firstnameEl.getAttribute('data-id');
  const lastname = document.querySelector('#lastname').value.trim();

if (firstname && lastname) {
    const response = await fetch(`/api/students/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ firstname, lastname }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/students');
    } else {
      alert('Failed to update student');
    }
  }

    }

document.querySelector('.update-student-form').addEventListener('submit', updateStudent);
