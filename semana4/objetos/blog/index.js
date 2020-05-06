let post = {
    titulo: "",
    autor: "",
    conteudo: "",
}

let posts = []

function criarPost () {
    let tituloDoPost = document.getElementById("titulo") 
    let autorDoPost = document.getElementById("autor") 
    let conteudoDoPost = document.getElementById("conteudo")
    
    const novoPost, {
        ...titulo = tituloDoPost.value,
        ...autor = autorDoPost.value,
        ...conteudo = conteudoDoPost.value,
    }
}