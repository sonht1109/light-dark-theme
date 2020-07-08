var button = document.querySelector('button');
var theme = document.querySelector('.theme');


button.addEventListener('click', function(){
    theme.classList.toggle('dark');
})