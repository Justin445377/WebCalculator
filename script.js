

const display = document.querySelector('.display');

function appendToDispaly(input){
    display.value += input;

}

function Calculate(){
    try{
     display.value = eval(display.value)
    }
    catch(error){
     display.value = 'error';
    }
    
}
function ClearDispaly(){
    display.value = '';
}