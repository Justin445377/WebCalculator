
// Entfernt das letzte Zeichen aus dem Display
function backspace() {
    display.value = display.value.slice(0, -1);
}


// Referenz auf das Display-Element
const display = document.querySelector('.display');


// Fügt die Eingabe an das Display an
function appendToDisplay(input){
    display.value += input;
}


// Löscht das Display
function ClearDisplay(){
    display.value = "";
}


// Berechnet den Ausdruck im Display
function Calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'error';
    }
}


// Fügt einen Dezimalpunkt hinzu, falls noch keiner in der aktuellen Zahl vorhanden ist
function appendComma() {
    let display = document.querySelector(".display");
    let parts = display.value.split(/[\+\-\*\/]/);
    let currentNumber = parts[parts.length - 1];

    if (!currentNumber.includes(".")) {
        display.value += ".";
    }
}


// Wechselt das Vorzeichen der aktuellen Zahl
function toggleSign() {
    try{
        display.value = eval(display.value) * -1;
    }
    catch(error){
        display.value = 'error';
    }
}
