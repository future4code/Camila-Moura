console.log("Bem vindo ao jogo de BlackJack!")
let txt = ""
let r = confirm("Quer iniciar uma nova rodada?") 
let i = 0
let carta1 = comprarCarta()
let carta2 = comprarCarta()
let carta3 = comprarCarta()
let carta4 = comprarCarta()

for (let i = 0; r === true && i < 1; i++) {
   r = confirm("Nova rodada!") // Nova rodada, caso a usuário clique em ok. Só é possível repetir duas vezes. 
   carta1
   carta2
   let resultadoUsuario = carta1.valor + carta2.valor // Cartas retiradas pelo usuário a soma de seus valores. 
   carta3
   carta4
   let resultadoComputador = carta4.valor + carta4.valor // Cartas retiradas pelo computador a soma de seus valores.

   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${resultadoUsuario}`)
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação ${resultadoComputador}`) 
   // Mostra a pontuação de ambos no Console

   if (resultadoUsuario > resultadoComputador) {
      console.log("O usuário ganhou!")
   } else if (resultadoComputador > resultadoUsuario) {
      console.log("O computador ganhou!")
   } else (resultadoUsuario = resultadoComputador); {
      console.log("Empate!")
   } // Mostra resultado do jogo de acordo com as somas dos valores das cartas

   if (r === false) {
      txt = "O jogo acabou" // Mostra a mensagem de fim de jogo no Console caso o usuário clique em cancelar
      console.log(txt)
   } 
}
