//Resize inputs
width = window.innerWidth;
searchInput = document.getElementById('search');
select = document.getElementById('user-type');
if (width > 400) {
    select.classList.add('form-control-lg')
    searchInput.classList.add('form-control-lg')
}
window.addEventListener('resize', function () {
    width = window.innerWidth;
    if (width > 400) {
        select.classList.add('form-control-lg');
        searchInput.classList.add('form-control-lg');
    }
    else {
        select.classList.remove('form-control-lg');
        searchInput.classList.remove('form-control-lg');
    }
})