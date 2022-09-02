const chalk = require('chalk');
const fs = require('fs');

const trataErro=(erro)=>{
  throw new Error(chalk.red(erro.code, 'caminho do arquivo incorreto'));
}

const  pegaArquivo = (caminhoDoArquivo) =>{
  fs.readFile(caminhoDoArquivo, 'utf-8', (erro, texto)=>{
    if(erro){
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  })
}

pegaArquivo('./arquivos/texto1.md');