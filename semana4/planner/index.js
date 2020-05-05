function adicionaTarefa() {
    let tarefaNova = document.getElementById("nova-tarefa")
    let diaEscolhido = document.getElementById(document.getElementById("semana").value)
    diaEscolhido.innerHTML += `<li>${tarefaNova.value}</li>`
    tarefaNova.value = ""
}