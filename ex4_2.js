// - cria referencia aos elementos da pagina HTML
const frm = document.querySelector("#inForm");
const resp = document.querySelector("#msnSaida");

//  - cria um evento ou ouvinte para o click do botão reset
frm.addEventListener("reset", () => {
   resp.innerText = "";
});

// - cria um evento ou ouvinte do evento INVALID referente ao campo Nome

frm.inNome.addEventListener("invalid", () => {
  resp.innerText = "Informe um nome valido";
  resp.style.color = "red";
});

// - cria um evento ou ouvinte do evento INVALID referente ao campo Altura
frm.inAltura.addEventListener("invalid", () => {
  resp.innerText = "Informe uma altura valida";
  resp.style.color = "red";
});

// - cria um evento ou ouvinte para quando for acionado o botão submit
frm.addEventListener("submit", (e) => {

  e.preventDefault();
  
  const nome = frm.inNome.value;
  const masculino = frm.inMasc.checked;
  const feminino = frm.inFem.checked;
  const altura = Number(frm.inAltura.value);

  // - Emite uma mensagem de erro caso o campo nome esteja vazio
  if(nome.trim() === "") {
    resp.innerText = `Informe um nome valido `;
    resp.style.color = "red"; 
    return;
  }

 // - Emite uma mensagem de erro caso o campo altura for informado com tipo de dado difernete de numero
 if(isNaN(altura) || altura <= 0) {
   resp.innerText = `ERROR -> ${altura} é invalido ... informe um numero valido`;
   resp.style.color = "red"; 
   return;
 }

 if(!masculino && !feminino) {
   resp.innerText = `ERROR ... Informe um sexo valido`;
   resp.style.color = "red"; 
   return;
 }

 // - calcula peso de acordo com o sexo informado
 // - Usando operador ternario
 const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

 // - Apresenta saida
  resp.innerText = `${nome}: seu peso ideal é: ${peso.toFixed(3)}`;
});
