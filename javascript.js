function submitApplication() {

  // get form data

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  // perform data validation

  if (!name || !email || !message) {

    alert("Please fill in all fields.");

    return;

  }

  // send data to server

  const formData = new FormData();

  formData.append("name", name);

  formData.append("email", email);

  formData.append("message", message);

  fetch("/submit-application", {

    method: "POST",

    body: formData

  })

    .then(response => response.json())

    .then(data => {

      console.log("Application submitted successfully:", data);

      alert("Application submitted successfully!");

    })

    .catch(error => {

      console.error("Failed to submit application:", error);

      alert("Failed to submit application. Please try again later.");

    });

}

