// Using the onclick property - define functions
window.storeName = storeName;
window.hideFunction1 = hideFunction1;
window.hideFunction2 = hideFunction2;
window.hideFunction3 = hideFunction3;
window.showName = showName;

function storeName() {
  let person = prompt("Please enter your name:", "User");
  let text = "Hello " + person;
  document.getElementById("name").innerHTML = text;
  localStorage.setItem('name', JSON.stringify(text));
}

function showName() {
  if (localStorage.getItem("name")) {
    let text = JSON.parse(localStorage.getItem("name"))
    document.getElementById("name").innerHTML = text;
  }
  else storeName();
}

function hideFunction1() {
    let x = document.getElementById("showHide1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function hideFunction2() {
  let x = document.getElementById("showHide2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideFunction3() {
  let x = document.getElementById("showHide3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

window.addEventListener("load", () => {
  let toggler = document.getElementsByClassName("caret");
  let i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }
});