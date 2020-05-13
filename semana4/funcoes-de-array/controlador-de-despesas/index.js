let conjuntoDeDespesas = []

function dadosDespesa(event) {
    event.preventDefault
    let valorDespesa = document.getElementById("valor").value
    let tipoDespesa = document.getElementById("cadastroDespesa").value
    let descricaoDespesa = document.getElementById("descricao").value

    let novaDespesa = {
        valor: valorDespesa,
        tipo: tipoDespesa,
        descricao: descricaoDespesa,
    }

    if (valorDespesa === '' || descricaoDespesa === '') {
        alert("Por favor, preencha todos os dados")
    } else {
        conjuntoDeDespesas.push(novaDespesa)
    }

    valorDespesa.value = ""
    tipoDespesa.value = ""
    descricaoDespesa = ""
}
