window.onscroll = function () { myFunction() };

let header = document.getElementById("tabs-div");
let sticky = header.offsetTop;

//Adiciona a classe sticky ao header quando o scroll for para baixo e remove quando estiver no topo
function myFunction() {
  if (window.scrollY > 90) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const carouselItems = document.querySelectorAll(".carousel_item");
let i = 1;

//Funcionalidade do carrossel de imagens em loop
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

//Funcionalidade da lista de servicos
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

//Funcionalidade dos horarios de atendimento
horarios.forEach(horario => {
  horario.addEventListener('click', () => {
    horario.classList.toggle('clicked');
  });
});