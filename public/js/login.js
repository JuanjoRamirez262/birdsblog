const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('You Failed to log in');

    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


//Create User from Sign Up form
document.querySelector("#signup").addEventListener("submit", (e) => {
  e.preventDefault();
  const fetchObj = {
    email: document.querySelector("#signup-email").value,
    password: document.querySelector("#signup-password").value,
    name: document.querySelector("#signup-name").value,
  }
  console.log(fetchObj);
  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(fetchObj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (!res.ok) {
      return alert("trumpet sound")
    } else {
      res.json()
      .then(data => {
        location.href = `/profile/${data.id}`
      })
    }
  })
})