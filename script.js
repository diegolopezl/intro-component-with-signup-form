const signUpBtn = document.querySelector(".sign-up");

const validEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errors = [
  "First Name cannot be empty",
  "Last Name cannot be empty",
  "Invalid email address",
  "Password cannot be empty",
];

signUpBtn.addEventListener("click", () => {
  const input = document.querySelectorAll("input");
  const txt = document.querySelectorAll(".text");

  for (let i = 0; i < input.length; i++) {
    for (let i = 0; i < txt.length; i++) {
      if (input[i].value === "") {
        input[i].classList.add("error");
        txt[i].innerHTML = errors[i];
      } else {
        input[i].classList.remove("error");
        txt[i].innerHTML = "";
      }

      if (i == 2 && !input[2].value.match(validEmail)) {
        input[i].classList.add("error");
        txt[i].innerHTML = errors[i];
      }
    }
  }

  if (
    input[0].value != "" &&
    input[1].value != "" &&
    input[2].value.match(validEmail) &&
    input[3].value != ""
  ) {
    window.location.reload();
  }
});
