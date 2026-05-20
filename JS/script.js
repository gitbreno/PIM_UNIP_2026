/* ==========================
   MENU LATERAL
========================== */

var itensMenu = document.querySelectorAll(".menu-item");

for(var i = 0; i < itensMenu.length; i++){

    itensMenu[i].addEventListener("click", selecionarMenu);

}

function selecionarMenu(event){


    for(var i = 0; i < itensMenu.length; i++){

        itensMenu[i].classList.remove("ativo");

    }

    this.classList.add("ativo");

}



/* ==========================
   BOTÃO DE PERÍODO
========================== */

var periodos = ["📅 Semana ▾", "📅 Mês ▾", "📅 Ano ▾"];

var indicePeriodo = 0;

function alterarPeriodo(){

    indicePeriodo++;

    if(indicePeriodo >= periodos.length){

        indicePeriodo = 0;

    }

    document.querySelector(".btn-periodo").innerText = periodos[indicePeriodo];

}



/* ==========================
   BOTÃO SINO
========================== */

function alterarSino(){

    var botao = document.getElementById("btnSino");

    if(botao.innerText == "🔔"){

        botao.innerText = "🔕";

    }

    else{

        botao.innerText = "🔔";

    }

}



/* ==========================
   ANEL DE PROGRESSO
========================== */

var porcentagem = 0;

var intervalo = setInterval(animarProgresso, 20);

function animarProgresso(){

    porcentagem++;

    document.getElementById("anelTexto").innerText =
    porcentagem + "%";

    document.getElementById("anel").style.background =
    "conic-gradient(#22c55e " +
    porcentagem +
    "%, #dcfce7 0%)";

    if(porcentagem >= 80){

        clearInterval(intervalo);

    }

}



/* ==========================
   GRÁFICO DE PESO
========================== */

var canvasPeso =
document.getElementById("graficoPeso");

var contextoPeso =
canvasPeso.getContext("2d");

var pesos = [100, 97, 95, 93, 92, 91, 91];

contextoPeso.strokeStyle = "#22c55e";
contextoPeso.lineWidth = 3;
contextoPeso.beginPath();

for(var i = 0; i < pesos.length; i++){

    var x = 30 + (i * 40);
    var y = 120 - pesos[i];

    if(i == 0){
        contextoPeso.moveTo(x, y);
    }
    else{
        contextoPeso.lineTo(x, y);
    }

}

contextoPeso.stroke();



/* ==========================
   GRÁFICO TREINOS
========================== */

var canvasTreinos =
document.getElementById("graficoTreinos");

var contextoTreinos =
canvasTreinos.getContext("2d");

var treinos = [4, 5, 6, 6, 7, 8, 6];

for(var i = 0; i < treinos.length; i++){

    var altura = treinos[i] * 10;
    var x = (i * 40) + 30;
    var y = 120 - altura;

    if(i == 4){
        contextoTreinos.fillStyle = "#0f172a";
    }
    else{
        contextoTreinos.fillStyle = "#22c55e";
    }

    contextoTreinos.fillRect(x, y, 25, altura);

}



/* ==========================
   CALENDÁRIO
========================== */

var hoje = new Date();

var mesAtual = hoje.getMonth();

var anoAtual = hoje.getFullYear();

var meses = [
    "Janeiro", "Fevereiro", "Março",
    "Abril",   "Maio",      "Junho",
    "Julho",   "Agosto",    "Setembro",
    "Outubro", "Novembro",  "Dezembro"
];

function renderCalendario(){

    var calendario =
    document.getElementById("calendarioGrade");

    calendario.innerHTML = "";

    document.getElementById("mesTitulo").innerText =
    meses[mesAtual] + " " + anoAtual;

    /* cabeçalho com os dias da semana */
    var diasSemana = ["D","S","T","Q","Q","S","S"];

    for(var i = 0; i < diasSemana.length; i++){
        var nome = document.createElement("div");
        nome.className = "dia-nome";
        nome.innerText = diasSemana[i];
        calendario.appendChild(nome);
    }

    /* espaços em branco antes do dia 1 */
    var primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();

    for(var i = 0; i < primeiroDia; i++){
        var vazio = document.createElement("div");
        calendario.appendChild(vazio);
    }

    /* dias do mês */
    var totalDias = new Date(anoAtual, mesAtual + 1, 0).getDate();

    for(var dia = 1; dia <= totalDias; dia++){

        var div = document.createElement("div");
        div.className = "dia";
        div.innerText = dia;

        /* marca o dia de hoje */
        if(mesAtual == hoje.getMonth() &&
           anoAtual == hoje.getFullYear() &&
           dia == hoje.getDate()){
            div.classList.add("hoje");
        }

        div.addEventListener("click", selecionarDia);
        calendario.appendChild(div);

    }

}

function selecionarDia(){

    var dias = document.querySelectorAll(".dia");

    for(var i = 0; i < dias.length; i++){
        dias[i].classList.remove("ativo");
    }

    this.classList.add("ativo");

}

function mudarMes(valor){

    mesAtual = mesAtual + valor;

    if(mesAtual > 11){
        mesAtual = 0;
        anoAtual++;
    }

    if(mesAtual < 0){
        mesAtual = 11;
        anoAtual--;
    }

    renderCalendario();

}

renderCalendario();



/* ==========================
   CONQUISTAS
========================== */

var conquistas = [

    { icone: "🏋️", nome: "Força Total" },
    { icone: "👟", nome: "Corredor"     },
    { icone: "❤️", nome: "Cardio King" },
    { icone: "⚖️", nome: "Meta Peso"  },
    { icone: "🔒", nome: "Consistência"},
    { icone: "⭐", nome: "Em breve"    }

];

var areaConquistas =
document.getElementById("conquistasGrade");

for(var i = 0; i < conquistas.length; i++){

    var badge = document.createElement("div");
    badge.className = "badge";

    badge.innerHTML =
        "<div class='badge-icone'>" +
        conquistas[i].icone +
        "</div>" +
        "<span class='badge-nome'>" +
        conquistas[i].nome +
        "</span>";

    areaConquistas.appendChild(badge);

}
