
class Cartao{
    constructor(nome, email, subject, message){
        this.nome = nome;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    
}



const listaRecados = JSON.parse(localStorage.getItem('recados')) || [];

// function adicionaRecado(nome, email){
//     const recado = new Cartao(nome, email);
//     listaRecados.push(recado)

// }

const button = document.querySelector('.buttonSend')
button.addEventListener('click', function adicionaRecado(event){
    event.preventDefault()

    let nome = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let sub = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;

    const recado = new Cartao(nome, email, sub, message);
    listaRecados.push(recado)
    localStorage.setItem('recados', JSON.stringify(listaRecados))

    document.querySelector('#name').value ='';
    document.querySelector('#email').value = '';
    document.querySelector('#subject').value = '';
    document.querySelector('#message').value = '';

    // let mensagemOk = document.createElement('div');
    // mensagemOk.classList.add('mensagemOK')

    // let form = document.querySelector('.form-control')

    // form.appendChild(mensagemOk)
    

})