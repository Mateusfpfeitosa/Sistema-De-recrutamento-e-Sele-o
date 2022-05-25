width = window.innerWidth;
if(width > 600){
    searchInput = document.getElementById('search');
    profissoes = ['Administrador', 'Advogado', 'Almoxarife', 'Analista de Qualidade', 'Analista de Riscos', 'Analista de Sistemas', 'Assessor', 'Assistente Administrativo', 'Auxiliar de enfermagem', 'Auxiliar de serviços gerais', 'Balconista', 'Barman', 'Caixa', 'Camareiro', 'Chefe de atendimento', 'Chefe de setor', 'Consultor', 'Contador', 'Coordenador', 'Cozinheiro', 'Designer', 'Eletricista', 'Engenheiro Civil', 'Motoboy', 'Tradutor', 'Zootecnista'];

    function autocomplete(inp, arr) {
        var form = document.querySelector("form"),
            recommendedSearch = document.createElement('ul');
            recommendedSearch.classList.add('list-group');
            recommendedSearch.classList.add('recommended-search');
            recommendedSearch.classList.add('scrollSpy');
            recommendedSearch.setAttribute('data-spy', 'scroll');
            form.appendChild(recommendedSearch); 
        closeAllLists(recommendedSearch);
        
        inp.addEventListener("input", function (e) {
            var b, i, val = this.value;
            closeAllLists(recommendedSearch);
            if (!val) { 
                recommendedSearch.classList.add('d-none');
                return false;
            }
            for (i = 0; i < arr.length; i++) {
            
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                
                    b = document.createElement("li");
                    b.classList.add('list-group-item');
                    
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
            
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                
                    b.addEventListener("click", function (e) {
                
                        inp.value = this.getElementsByTagName("input")[0].value;
                    
                        closeAllLists(recommendedSearch);
                    });
                    recommendedSearch.appendChild(b);
                    recommendedSearch.classList.remove('d-none');
                }
            }
        });
        function closeAllLists(recommendedSearch) {
            recommendedSearch.innerHTML = '';
            recommendedSearch.classList.add('d-none');
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(recommendedSearch);
        });
    }
    autocomplete(searchInput, profissoes);
}