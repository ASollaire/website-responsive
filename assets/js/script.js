const slideBtn = document.getElementById("slide-button");

slideBtn.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "orange";

    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

function extend() {
  setTimeout(function () {
    slideBtn.classList.remove("btn-hidden");
    slideBtn.classList.add("btn-extended");
  }, 200);
}

function hide() {
  setTimeout(function () {
    slideBtn.classList.remove("btn-extended");
    slideBtn.classList.add("btn-hidden");
  }, 500);
}

slideBtn.addEventListener("mouseover", extend);

slideBtn.addEventListener("mouseleave", hide);
