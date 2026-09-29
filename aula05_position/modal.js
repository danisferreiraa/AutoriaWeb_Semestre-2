const esmaecer = document.querySelector("#esmaecer");
// definição variável
// variável constante que não será alterado depois
// variável recebe o container (div) de esmaecer

esmaecer.addEventListener('click', function(){
    // evento de click
    // esmaecer.style.display = 'none';
    esmaecer.style.visibility = 'hidden';
    // qualquer opção pode ser usada 
})

const abrirmodal = document.querySelector('#abrirmodal');
abrirmodal.addEventListener('click', function(){
    // esmaecer.style.display = 'flex'
    esmaecer.style.visibility = 'visible'
})