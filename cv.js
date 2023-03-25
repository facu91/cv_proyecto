var darkMode = false;
var darkModeBtn = document.getElementById('dark-mode-btn');

darkModeBtn.addEventListener('click', function() {
  darkMode = !darkMode;
  
  if (darkMode) {
    document.body.classList.add('dark-mode');
    darkModeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo claro';
  } else {
    document.body.classList.remove('dark-mode');
    darkModeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo oscuro';
  }
});


const btnMore1 = document.querySelector(".btn-more1");
const btnMore2 = document.querySelector(".btn-more2");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");

btnMore1.addEventListener("click", function() {
  if (text1.style.display === "none") {
    text1.style.display = "block";
    btnMore1.textContent = "Ver menos";
  } else {
    text1.style.display = "none";
    btnMore1.textContent = "Ver más";
  }
});

btnMore2.addEventListener("click", function() {
  if (text2.style.display === "none") {
    text2.style.display = "block";
    btnMore2.textContent = "Ver menos";
  } else {
    text2.style.display = "none";
    btnMore2.textContent = "Ver más";
  }
});


function imprimir() {
    window.print();  }
document.getElementById("btnPrint").onclick = function() {
imprimir();
}


var texto = "Javier Álvarez";
var delay = 500; 

function escribirTexto(i) {
  if (i <= texto.length) {
    document.getElementById("texto").innerHTML = texto.substring(0, i);
    setTimeout(function() {
      escribirTexto(i + 1);
    }, delay);
  }
}

escribirTexto(0);