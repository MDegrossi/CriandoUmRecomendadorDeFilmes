//Fantasia, aventura, drama,

//A viagem de chihiro, LIVRE, fantasia, aventura 
//Peddington, LIVRE, fantasia, aventura
//O feitiço do tempo, LIVRE

//Guardioes da galaxia, 12, fantasia, aventura
//As aventuras de pi, 10, drama, fantasia, aventura
//Depois da chuva, 10, drama
//Ladroes de bicicleta, 12, drama
//O menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;
let compoAventura;

function setup() {
  createCanvas(700, 400);
  createElement('h2', 'Recomendador de Filmes');
  createSpan('Sua idade:');
  campoIdade = createInput('5');
  campoFantasia = createCheckbox('Gosta de fantasia?');
  campoAventura = createCheckbox('Gosta de aventura?');
}

function draw() {
  background('white');
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10){
    if (idade >= 14) {
      return 'O menino que descobriu o vento';
    } else {
      if (idade >= 12){
        if (gostaDeFantasia || gostaDeAventura) {
          return 'Homem-aranha: no aranhaverso';
        } else{
          return 'Ladrões de bicicleta';
        }
      } else {
         if (gostaDeFantasia) {
          return 'As aventuras de pi';
        } else{
          return 'Depois da chuva';
        }
      } 
    }
  } else{
    if (gostaDeFantasia){
      return 'A viagem de chihiro';
    } else{
      return 'O feitiço do tempo';
    }
  }
}