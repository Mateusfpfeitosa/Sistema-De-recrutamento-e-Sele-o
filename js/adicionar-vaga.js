var estado = document.getElementById('estado');
xhr = new XMLHttpRequest();
xhr.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados");
xhr.send();
xhr.addEventListener("load", function () {
    estados = JSON.parse(xhr.responseText);
    estados.forEach(function (uf) {
        op = document.createElement('option');
        op.setAttribute('value', uf.sigla);
        op.setAttribute('id', uf.id);
        op.textContent = uf.nome;
        estado.appendChild(op);
    })

});
estado.addEventListener('change', function (e) {
    let cidade = document.getElementById('cidade');
    options = cidade.querySelectorAll('option');
    for (i = 1; i < options.length; i++) {
        options[i].remove();
    }
    if (this.options[this.selectedIndex]) {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + this.options[this.selectedIndex].id + "/municipios");
        xhr.send();
        xhr.addEventListener("load", function () {
            cidades = JSON.parse(xhr.responseText);
            cidades.forEach(function (ci) {
                op = document.createElement('option');
                op.setAttribute('value', ci.nome);
                op.textContent = ci.nome;
                cidade.appendChild(op);
            })
        });
    }
})
var escolaridade = document.getElementById('esc-min');
var cursos = document.getElementById('cursos');
dnoneInput();
escolaridade.addEventListener('change', function () {
    dnoneInput();
});
function dnoneInput(){
    var selected = escolaridade.options[escolaridade.selectedIndex].value;
    if (selected == 'ensino-superior' || selected == 'ensino-superior-incompleto')
        cursos.classList.remove('d-none');
    else
        cursos.classList.add('d-none');
}
// div = document.getElementById('cursos-adicionais');
// buttonAdd = document.getElementById('add-curso');
// var items = 1;
// buttonAdd.addEventListener('click', function (e) {
//     e.preventDefault();
//     items++;
//     col = document.createElement('div');
//     col.classList.add('col-12');
//     formG = document.createElement('div');
//     formG.classList.add('form-group');
//     label = document.createElement('label');
//     label.setAttribute('for', 'curso' + items);
//     label.classList.add('mb-1');
//     label.textContent = 'Curso ' + items;
//     input = document.createElement('input');
//     input.classList.add('form-control');
//     input.setAttribute('type', 'text');
//     input.setAttribute('id', 'curso' + items);
//     input.setAttribute('name', 'curso' + items);
//     formG.appendChild(label);
//     formG.appendChild(input);
//     col.appendChild(formG);
//     div.appendChild(col);
// });