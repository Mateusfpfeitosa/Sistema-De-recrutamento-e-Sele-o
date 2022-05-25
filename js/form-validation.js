submitButton = document.querySelector('.form-submit');
inputs = document.querySelectorAll('input');
error = document.querySelector('.error-message');
errorCounter = 0;
senha = document.querySelector('#senha');
submitButton.addEventListener('click', function (event) {
	inputs.forEach(function (e) {
		if (!e.value) {
			invalido(event, e, 'Preencha todos os campos');
		}
		else if (e.id == "cnpj") {
			if (!validaCNPJ(e.value)) {
				invalido(event, e, 'CNPJ inválido');
			}
		}
		else if (e.id == "confsenha") {
			if (e.value != senha.value) {
				invalido(event, e, 'As senhas são diferentes');
			}
		}
		else if (e.id == "senha") {
			if (!validaSenha(e.value)) {
				invalido(event, e, 'A senha não atende aos requisitos');
			}
		}
		else if (e.id == "cpf") {
			if (!validaCPF(e.value)) {
				invalido(event, e, 'CPF inválido');
			}
		}
	});
});
function invalido(event, e, text) {
	event.preventDefault();
	e.classList.add('invalido');
	error.textContent = text;
	errorCounter++;
}

inputs.forEach(function (e) {
	e.addEventListener('input', function (event) {
		this.classList.forEach(function (classe) {
			if (classe.search('invalido') > -1) {
				e.classList.remove('invalido');
				errorCounter--;
			}
		});
		if (errorCounter == 0) {
			error.textContent = '';
		}
	});
});

function validaCNPJ(cnpj) {
	if (cnpj.length != 14)
		return false;
	else {
		var CNPJ = parseInt(cnpj);
		CNPJ = CNPJ.toString();
		//Verifica se não foram perdidos valores após a conversão, o que indica a presença de letras
		if (CNPJ.length != 14)
			return false;
		var pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
		if (!digitValidator(soma(pesos, CNPJ, 12), CNPJ[12]))
			return false;
		var pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
		if (!digitValidator(soma(pesos2, CNPJ, 13), CNPJ[13]))
			return false;
		return true;
	}
	function soma(array1, array2, end) {
		var soma = 0;
		for (let index = 0; index < end; index++) {
			soma += array1[index] * parseInt(array2[index]);
		}
		return soma;
	}
	function digitValidator(resto, value) {
		var resultado = resto % 11 < 2 ? 0 : 11 - resto % 11;
		if (resultado == value)
			return true;
		return false;
	}
}
function validaSenha(senha) {
	if (senha.length < 8)
		return false;
	var letra = false, numero = false
	for (let index = 0; index < senha.length; index++) {
		if (/[A-Za-z]/.test(senha[index]))
			letra = true;
		else if (!isNaN(parseInt(senha[index])))
			numero = true;
	}
	if (letra && numero)
		return true;
	return false;
}
function validaCPF(cpf) {
	if (cpf.length != 11)
		return false;
	else {
		var CPF = parseInt(cpf);
		CPF = CPF.toString();
		//Verifica se não foram perdidos valores após a conversão, o que indica a presença de letras
		if (CPF.length != 11)
			return false;
		if (!digitValidator(soma(CPF, 10, 9), CPF[9]))
			return false;
		if (!digitValidator(soma(CPF, 11, 10), CPF[10]))
			return false;
		return true;
	}
	function soma(array1, start, end) {
		var soma = 0, cont = start;
		for (let index = 0; index < end; index++ , cont--) {
			soma += array1[index] * cont;
		}
		return soma;
	}
	function digitValidator(resto, value) {
		var resultado = resto % 11 < 2 ? 0 : 11 - resto % 11;
		if (resultado == value)
			return true;
		return false;
	}
}