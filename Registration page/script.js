// script.js

function enrollStudent() {
    const form = document.getElementById('enrollmentForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const website = form.elements['website'].value;
    const imageLink = form.elements['imageLink'].value;
    const gender = form.elements['gender'].value;
    const skills = Array.from(form.elements['skills']).filter(skill => skill.checked).map(skill => skill.value);
  
    // Create a card for the enrolled student with two sections
    const card = document.createElement('div');
    card.classList.add('student-card');
    card.innerHTML = `
      <div class="description-section">
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Gender: ${gender}</p>
        <p>Website: <a href="${website}" target="_blank">${website}</a></p>
        <p>Skills: ${skills.join(', ')}</p>
      </div>
      <div class="image-section">
        <img src="${imageLink}" alt="${name}'s Image">
      </div>
    `;
  
    // Add the card to the enrolled students section
    const enrolledList = document.getElementById('enrolledList');
    enrolledList.appendChild(card);
  
    clearForm();
  }
  
  function clearForm() {
    const form = document.getElementById('enrollmentForm');
    form.reset();
  }
  