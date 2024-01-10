

// API Request for LOGIN the user!.....................

function handleLoginSubmit(event) {
  event.preventDefault();

  // Retrieve input values
  const username = document.getElementById("exampleInputUsername1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  const loginData = {
    username: username,
    password: password,
  };

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData), // Convert data to JSON string
  })
    .then((response) => {
        return response.text();
    })
    .then((data) => {
      console.log("Success:", data);
      alert(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


// API Request for REGISTER the user!.....................

function handleRegisterSubmit(event) {
  event.preventDefault();

  // Retrieve input values
  const username = document.getElementById("exampleInputUsername1").value;
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  const RegisterData = {
    username: username,
    email: email,
    password: password,
  };

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(RegisterData), // Convert data to JSON string
  })
    .then((response) => {
        return response.text();
    })
    .then((data) => {
      console.log("Success:", data);
      alert(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
