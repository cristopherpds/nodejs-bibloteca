const chalk = require('chalk');
const fs = require('fs');

const trataErro = (erro) => {
  throw new Error(chalk.red(erro.code, 'caminho do arquivo incorreto'));
}

const extraiLinks = (texto) => {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }

  return arrayResultados.length === 0 ? 'nao ha links' : arrayResultados;
}
const pegaArquivo = async (caminhoDoArquivo) => {
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

module.exports = pegaArquivo;

