const target = document.body;
const ourForm = document.querySelector('form');
const ourInput = document.querySelector('#input');

ourForm.addEventListener('submit', function (e){
    e.preventDefault();
    let colorValue = ourInput.value;
    target.style.background = colorValue;
})

