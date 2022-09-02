const chalk = require('chalk');
const fs = require('fs');

const trataErro=(erro)=>{
  throw new Error(chalk.red(erro.code, 'caminho do arquivo incorreto'));
}

const  pegaArquivo = async(caminhoDoArquivo) =>{
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  }
}

/* const pegaArquivo =(caminhoDoArquivo)=>{
  fs.promises
  .readFile(caminhoDoArquivo, 'utf-8')
  .then((texto)=> console.log(texto))
  .catch((erro) => trataErro(erro))
} */

/* const  pegaArquivo = (caminhoDoArquivo) =>{
  fs.readFile(caminhoDoArquivo, 'utf-8', (erro, texto)=>{
    if(erro){
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  })
} */

pegaArquivo('./arquivos/texto1.md');