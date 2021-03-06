// set intial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const stlyes = e.currentTarget.classList;
    if (stlyes.contains("decrease")) {
      count--;
    } else if (stlyes.contains("reset")) {
      count = 0;
    } else if (stlyes.contains("increase")) {
      count++;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
