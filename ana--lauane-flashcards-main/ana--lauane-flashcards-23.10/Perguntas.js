criaCartao(
    'Programação',
    'O que é JavaScript?',
    'O JavaScript é uma linguagem de programação'
)

criaCartao(
    'Programação',
    'O que é Python?',
    'O Python é uma linguagem de programação.'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
<p>${resposta}</p>
</div>
</div> `
