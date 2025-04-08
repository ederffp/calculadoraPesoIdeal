### CALCULADORA DE PESO IDEAL 

## Descrição: 

<p> O algoritmo abaixo tem por finalidade expor mais outros aspectos que aprendi no exercicio de logica de programação usando a linguagem javascript. Abaixo o algoritmo faz coleta de dados inseridos pelo usuário como, nome, peso e altura e calcula seu peso ideal conforme tais informações </p>

### Códigos: 

#### Código html - front-end 

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/jpg" href="/imgs/pictureBalanca.jpg">
        <link rel="stylesheet" href="/css/estilos.css">
        <title>Calculadora de Peso</title>
    </head>
    <body>
        <img src="/imgs/pictureBalanca.jpg" alt="Balança para pesar">
        <h1>Programa calculo do peso ideal</h1>

        <form id="inForm">
          <p>
            <label for="inNome">Nome:</label>
            <input type="text" id="inNome" name="nome">
          </p>
          <p>
           <label for="inSexo">Sexo:</label>
           <input type="radio" id="inMasc" name="sexo"> Masculino
           <input type="radio" id="inFem" name="sexo"> Feminino
          </p>

          <p>
           <label for="inAltura">Altura:</label>
           <input type="number" min="0" step="0.01" id="inAltura">
          </p>

          <input type="submit" value="Calcular Peso ideal">
          <input type="reset" value="Limpar campos">

        </form>

        <h3 id="msnSaida"></h3>

        <script src="/js/ex4_2.js"></script>

    </body>
</html>
```

#### Código javaScript

```javascript
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

```

### Observações: 

- Propositadamente retirei o atributo <b>required</b> de algumas tags html por conta que ela inibia a personalização da lógica que criei no codigo em javascript, somente retirando tal atributo que a lógica ali faria sentido para seu uso.


## Conclusão: 

- Embora simples passei a usar com mais frequencia nos algoritmos arrow functions() como passei a utilizar condicionais para validar ou não os campos de enntrada do usuário, isso se aproxima ainda mais dos programas que hoje estão do mercado - mesmo que emobra ainda bem distante de se-los.

