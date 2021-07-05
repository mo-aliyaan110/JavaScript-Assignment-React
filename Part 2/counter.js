countGlobal = 0
function countPlus() {
    let disp =  document.getElementById('screen');
    disp.innerText = ++countGlobal;
}
function countMinus() {
    let disp =  document.getElementById('screen');
    disp.innerText = --countGlobal;
}
function countReset() {
    let disp =  document.getElementById('screen');
    disp.innerText = 0;
    countGlobal = 0;
}
