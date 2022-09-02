#!/usr/bin/env node
const chalk = require('chalk');
const validaURLs = require('./http-validacao');
const pegaArquivo = require('./index');


const caminho = process.argv;

const processaTexto = async (caminhoDeArquivo) => {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === 'validar') {
    console.log(chalk.yellow('links validados'), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }
}

processaTexto(caminho);