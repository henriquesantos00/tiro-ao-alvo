let lampada = document.getElementById("lampada");
let cenario = document.getElementById("cenario");
let surpresa = document.getElementById("surpresa");

lampada.onmouseover = () => {
    lampada.src = "on.png";

    cenario.classList.add("iluminado");

    surpresa.style.display = "block";
};

lampada.onmouseout = () => {

    lampada.src = "off.png";

    cenario.classList.remove("iluminado");

    surpresa.style.display = "none";
};
