function myPopup() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function toggleSwitch() {
  let element = document.body;
  element.classList.toggle("pink");
}

let uname = document.querySelector("#contact-text-input");
let email = document.querySelector("#contact-email-input");
let message = document.querySelector("#msg");
function submitForm() {
  if (uname.value === "") {
    alert(`Hey, fill me out first!`);
  } else {
    uname = uname.value;
    email = email.value;
    message = message.value;
    alert(
      `Thank you ${uname}, for your message: ${message}. We know we can reach you at ${email}! `
    );
  }
}

function submitCareers() {
  let name = document.querySelector("#contact-text-input").value;
  if (name === "") {
    alert(`upload your CV!`);
  } else {
    alert(`Thank you ${name}!`);
  }
}

function signUp() {
  let signup = document.getElementById("signUp");
  signup.classList.toggle("show");
}
