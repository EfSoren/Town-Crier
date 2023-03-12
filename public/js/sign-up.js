const signUpBtn = document.getElementById("signupbtn");
const signInBtn = document.getElementById("signinbtn");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const location = document.querySelector("#city").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, location }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log(user);
      document.location.replace(`city/${user.username}`);
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);

const guest = document.getElementById("forgot-password");

const loginFormHandlerGuest = async (event) => {
  event.preventDefault();

  const username = "efsoren";
  const password = "password";

  if (username && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log(user);
      document.location.replace(`city/${user.username}`);
    } else {
      alert("Failed to log in");
    }
  }
};

guest.addEventListener("click", loginFormHandlerGuest);
