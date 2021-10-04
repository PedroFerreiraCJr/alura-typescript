// Nós módulos do JavaScript é preciso colocar a extensão do arquivo, neste caso, .js
import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);