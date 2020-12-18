let allButtons = document.getElementsByTagName('button');

let alertButton = document.getElementById('alert');
let sommeButton = document.getElementById('somme');

alertButton.addEventListener('click',() => {
    alert("Hello world");
});

sommeButton.addEventListener('click', () => {
   let div = document.createElement('div');
   document.getElementById('contenue').appendChild(div);
   div.innerHTML = (5 + 6);

});
