/*O value do textoarea deve ser inserido por javascript*/
document.getElementById('area-resumo').value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, molestie vitae sodales eget, tincidunt pellentesque tortor. Proin purus velit, consectetur non tempus id, tincidunt sed dolor";
var imgInput = document.getElementById("img-input");
var figImg = document.getElementById("fig-img");
var cep = document.getElementById("cep");
function inputImg(event) {
    event.preventDefault();
    imgInput.click();
}
imgInput.addEventListener("change", function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = figImg;
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});
cep.addEventListener("focusout", function() {
    var link = "https://viacep.com.br/ws/"+this.value+"/json/";
    xhr = new XMLHttpRequest();
    xhr.open("GET", link);
    xhr.addEventListener("load", function() {
        endereco = JSON.parse(xhr.responseText);
        if(!endereco.erro){
            document.getElementById('endereco').value = endereco.logradouro;
            document.getElementById('bairro').value = endereco.bairro;
            document.getElementById('cidade').value = endereco.localidade;
            document.getElementById('estado').value = endereco.uf;
        }
    })
    xhr.send();
}) 
