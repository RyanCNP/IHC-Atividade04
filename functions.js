window.onscroll = function () { myFunction() };

let header = document.getElementById("tabs-div");
let sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > 90) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const carouselItems = document.querySelectorAll(".carousel_item");
let i = 1;

setInterval(() => {
  Array.from(carouselItems).forEach((item, index) => {

    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`
    }
  })


  if (i < carouselItems.length) {
    i++;
  }
  else {
    i = 0;
  }
}, 2000)

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

const horarios = document.querySelectorAll('.horario');

horarios.forEach(horario => {
  horario.addEventListener('click', () => {
    horario.classList.toggle('clicked');
  });
});