const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(batman){
        console.log(batman)
        console.log(batman.target)
        if(batman.target.id === 'grey'){
            body.style.backgroundColor = batman.target.id;    
        }
        if(batman.target.id === 'blue'){
            body.style.backgroundColor = batman.target.id;
        }
        if(batman.target.id === 'green'){
            body.style.backgroundColor = batman.target.id;
        }
        if(batman.target.id === 'red'){
            body.style.backgroundColor = batman.target.id;
        }
     })
});
