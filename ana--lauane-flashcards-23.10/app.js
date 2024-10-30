function criaCartao (categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
cartao.className = 'cartao'
}
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>Programacao</h3>
<div class="cartao__conteudo__pergunta">
<p>O que e JavaScript?</p>
</div>
<div class="cartao__conteudo__resposta">
<p>O JavaScript e uma linguagem de programacao</p>
</div>
</div>
`
container.appendChild(cartao)
