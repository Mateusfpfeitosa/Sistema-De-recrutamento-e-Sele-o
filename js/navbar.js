/*Variáveis que indicam se o usuário está logado, se é uma empresa, 
o texto para as opções da compania e o texto para usuários*/
var logged = false,
    isCompany = false,
    userName = "João Vitor",
    textCompany = ["Painel Administrativo", "Candidatos", "Vagas Abertas", "Sair"],
    textUsers = ["Painel Administrativo", "Currículo", "Vagas Aplicadas", "Sair"];

// Logged users and options
profileOptions = document.querySelectorAll('.profile-option');
profile = document.querySelector('.profile-logged');
profileName = document.querySelector('.profile-name');
profileName.textContent = userName;
CC = document.getElementById("CC");
CE = document.getElementById("CE");
elogin = document.getElementById("elogin");
clogin = document.getElementById("clogin");
if (!logged) {
    profile.classList.add('d-none');
}
else {
    CC.classList.add('d-none');
    CE.classList.add('d-none');
 
    if (isCompany) {
        clogin.classList.add('d-none');
        for (i = 0; i < profileOptions.length; i++) {
            profileOptions[i].textContent = textCompany[i];
        }
    }
    else {
        elogin.classList.add('d-none');
        for (i = 0; i < profileOptions.length; i++) {
            profileOptions[i].textContent = textUsers[i];
        }
    }
}

// Icon change
var menuButton = document.getElementsByClassName('navbar-toggler'),
    icon = document.getElementById('menu-icon'),
    isClosed = true;

menuButton[0].addEventListener('click', function () {
    if (isClosed) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        isClosed = false;
    }
    else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        isClosed = true;
    }
});


