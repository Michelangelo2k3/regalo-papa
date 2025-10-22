const intro = document.getElementById("intro");
const startBtn = document.getElementById("start-btn");
const galeriaSection = document.getElementById("galeria");
const visor = document.getElementById("visor");
const fotoGrande = document.getElementById("foto-grande");
const textoGrande = document.getElementById("texto-grande");

const textosGaleria = {
    1:"Siempre estaré agradecido por todo lo que haces ❤️",
    2:"Los mejores momentos son contigo, papá.",
    3:"Gracias por enseñarme a ser fuerte 💪",
    4:"Eres mi ejemplo y mi mayor apoyo 🙏",
    5:"Por todos esos días en los que no te rendiste.",
    6:"Te mereces el mundo entero 🌍",
    7:"Gracias por estar cuando más te necesito.",
    8:"Cada sonrisa tuya vale más que mil palabras.",
    9:"Tu cariño es mi refugio ❤️",
    10:"Por todo lo que me has enseñado.",
    11:"Orgulloso de ser tu hijo 👊",
    12:"Eres y serás siempre mi héroe.",
    13:"Gracias por tanto amor y paciencia.",
    14:"No hay día que no te admire.",
    15:"El mejor padre del mundo, sin duda.",
    16:"Te quiero, papá ❤️",
    17:"Gracias por no rendirte conmigo nunca.",
    18:"Los abuelos, estarían orgullosos. Te quiero❤️ ",
};

// Al entrar, mostramos galería con numeritos
startBtn.addEventListener("click", ()=>{
    intro.hidden = true;
    galeriaSection.hidden = false;

    // Añadimos data-num (1,2,3...) a cada foto
    document.querySelectorAll(".foto").forEach((f,i)=>{
        f.setAttribute("data-num", i+1);
    });
    galeriaSection.scrollIntoView({behavior:"smooth"});
});

// Abrir foto (quitar velo)
window.abrirFoto = function(num){
    const fotoEl = document.querySelector(`.foto:nth-child(${num})`);
    if(fotoEl) fotoEl.classList.add("abierta");

    fotoGrande.src = `images/${num}.jpg`;
    textoGrande.textContent = textosGaleria[num] || "";
    visor.style.display = "flex";
    visor.setAttribute("aria-hidden","false");
    requestAnimationFrame(()=>{ fotoGrande.style.transform = "scale(1.05)"; });
};

// Cerrar visor y restaurar efecto
window.cerrarFoto = function(){
    fotoGrande.style.transform = "scale(1)";
    visor.style.display = "none";
    visor.setAttribute("aria-hidden","true");
};

// Cerrar tocando fuera o con ESC
visor.addEventListener("click", e=>{
    if(e.target===visor) cerrarFoto();
});
document.addEventListener("keydown", e=>{
    if(e.key==="Escape" && visor.getAttribute("aria-hidden")==="false") cerrarFoto();
});
