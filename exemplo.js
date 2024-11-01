let processarForm = (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome');
    const senha = document.getElementById('senha');
    const repetesenha = document.getElementById('repetesenha');
    const cidade = document.getElementById('cidade');
    const deacordo = document.getElementById('deacordo');

    // Validação
    if (nome.value.trim().length == 0){ // se o tamanho do valor, retirando os espaços do inicio e fim é 0
        nome.classList.add('invalido');
        nome.focus(); // joga o cursor no campo
        return;
    }

    if (senha.value.length < 8){ // se a senha tiver menos de 8 caracteres, é inválido
        senha.classList.add('invalido');
        senha.focus();
        return;
    }

    if (repetesenha.value !== senha.value){
        repetesenha.classList.add('invalido');
        repetesenha.focus();
        return;
    }

    if (![ "1", "2", "3" ].includes(cidade.value)){ // testa se no valor de cidade tem tem um dos elementos do array
        cidade.classList.add('invalido');
        cidade.focus();
        return;
    }

    if (!deacordo.checked){ // checked é a proprie que retorna um booleano se o checkbox está marcado ou não
        deacordo.classList.add('invalido');
        deacordo.focus();
       return; 
    }

    // Construir um objeto
    console.log("Enviar para o servidor");
    
    const usuarioNovo = {
        usuario: nome.value.trim(),
        senha: senha.value,
        cidade: cidade.value,
    };
    
    console.log(usuarioNovo);
    alert('Cadastrado com sucesso!');
    limparCampos();
}

const limparCampos = () => window.location.href = 'exemplo.html';

const limparErro = e => e.currentTarget.classList.remove('invalido');

const iniciar = () => {
    const formulario = document.forms[0]; // o comando forms em document, retorna todos os formularios do doc
    formulario.addEventListener('submit', processarForm); // submit, pois o botão é submit
    formulario.querySelectorAll('input,select').forEach(f => f.addEventListener('input', limparErro)); 
    // seleciona em formulario todos os inputs e selects e em cada um deles adiciona o evento
    // evento do tipo input ocorre quando seu valor é alterado, ou seja, será chamado quando sofrer alteração
}

document.addEventListener('DOMContentLoaded', iniciar);