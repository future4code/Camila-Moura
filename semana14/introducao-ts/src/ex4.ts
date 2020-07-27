/* a) Com a tsconfig já feita, para gerar um arquivo em JS
baseado em outro em TS, basta digitar tsc no terminal */

/* b) Caso o arquivo esteja em uma pasta chamada src, é preciso
alterar a tsconfig.json, na linha include, onde é descrito quais
pastas serão consideradas na hora de transpilar  */

/* c) Basta rodar o comando tsc seguido do nome dos arquivos */

/* d)  As principais diferenças entre os arquivos são:
 - o arquivo criado usa ES5, não ES6
 - noImplicitAny, removeComments, preserveConstEnums, outDir,
 sourceMap, include e exclude não estão no arquivo criado
 },

 As possibilidades de configuração que mais chamaram atenção foram:
 - lib, para especificar libs externas incluídas
 - checkJs, para mostrar erros no JS
 - noUnusedParameters, para mostrar parâmetros que não são chamados
*/
