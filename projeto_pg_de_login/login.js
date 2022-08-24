var nome = "jose@hostidc.com";
var senha = "123321";
var logado = false;

function login(){

    if(nome === nome && senha === senha){
        window.location
        console.log ('### window', window);
        console.log ('### window.location',window.location);

        logado = true

    }else{
        alert.error("Por favor verifique seus dados, tente novamente! ")
    }
    return logado;
}

