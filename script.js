const email = document.getElementById("email");
const senha = document.getElementById("senha");

function login(){
    if(email.value == 'admin@email.com' && senha.value == '1234'){
        window.alert('Login efetuado com sucesso')
    } else{
        window.alert('Email e/ou senha incorretos')
    }

}