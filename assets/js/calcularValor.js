const form = document.querySelectorAll('form');

for(let i = 0; i < form.length; i++) {
    form[i].addEventListener('click', function(e) {
        //e.preventDefault();
        console.log(form[i]);
        
    })
}