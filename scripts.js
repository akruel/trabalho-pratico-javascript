var rgRed = document.querySelector("#rgRed");
var rgGreen = document.querySelector("#rgGreen");
var rgBlue = document.querySelector("#rgBlue");

var nbRed = document.querySelector("#nbRed");
var nbGreen =  document.querySelector("#nbGreen");
var nbBlue = document.querySelector("#nbBlue");

var div = document.querySelector("#sqRGB");

window.onload = () => {    
    rgRed.value = 0;
    rgGreen.value = 0;
    rgBlue.value = 0;
    
    nbRed.value = 0;
    nbGreen.value = 0;
    nbBlue.value = 0;

    div.style.backgroundColor = `rgb(${rgRed.value}, ${rgGreen.value}, ${rgBlue.value})`;
};

modifyColors = () => {
    nbRed.value = rgRed.value;
    nbGreen.value = rgGreen.value;
    nbBlue.value = rgBlue.value;

    div.style.backgroundColor = `rgb(${rgRed.value}, ${rgGreen.value}, ${rgBlue.value})`
}