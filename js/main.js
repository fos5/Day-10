// declearing variables
myText = document.getElementById('myText');
myError = document.querySelector('.error');
myText.addEventListener('keyup', function (e) {
    if (e.getModifierState('CapsLock')) {
        myError.innerHTML = "Caps lock is on";
    } else {
        myError.innerHTML = "";
    }
});