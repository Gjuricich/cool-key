const vowels = ['e', 'i', 'a', 'o', 'u'];
const codes = ['enter', 'imes', 'ai', 'ober', 'ufat'];

// Función para manejar el efecto en la redirección a index
function redirectEffect(event) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 500);
}

function encrypt() {
    validateText();
    const text = document.getElementById('text1').value;
    let encrypt = text.toLowerCase();
    encrypt = replacement(encrypt, vowels, codes);
    document.querySelector('#text2').value = encrypt;
    return;
};

function decrypt() {
    validateText();
    const text = document.getElementById("text1").value;
    let decrypt = text.toLowerCase();
    decrypt = replacement(decrypt, codes, vowels);
    document.querySelector('#text2').value = decrypt;
    return;
};

function replacement(text, include, replacement) {
    for (let i = 0; i < include.length; i++) {
        if (text.includes(include[i])) {
            text = text.replaceAll(include[i], replacement[i]);
        }
    }
    return text;
}

function clearTextArea() {
    document.querySelector('#text1').value = '';
    document.querySelector('#text2').value = '';
}


function addListDialogText(text) {
    const li = document.createElement('li');
    li.textContent = text;
    document.getElementById('dialog-text-list').appendChild(li);
}


function validateText() {
    const text = document.getElementById('text1').value;
    const validateUppercase = /[A-Z]/;
    const validateSpecialCharacters = /[^a-z\s]/;
    const dialog = document.getElementById('dialog');
    const textList = document.getElementById('dialog-text-list');
    const title = document.getElementById('dialog-title');

    textList.innerHTML = '';
    title.innerHTML = '';
    title.textContent = 'Error';

    if (validateUppercase.test(text)) {
        addListDialogText('Uppercase letters are not allowed');
        clearTextArea();
        dialog.showModal();
        return false;
    }

    if (validateSpecialCharacters.test(text)) {
        addListDialogText('Special characters are not allowed');
        clearTextArea();
        dialog.showModal();
        return false;
    }

    dialog.close();
    return true;
}

function rulesDialog() {
    const dialog = document.getElementById('dialog');
    const textList = document.getElementById('dialog-text-list');
    const title = document.getElementById('dialog-title');

    textList.innerHTML = '';
    title.innerHTML = '';
    title.textContent = 'Rules';
    addListDialogText('Uppercase letters and special characters will not be accepted.');
    addListDialogText('The maximum character length allowed is 1000.');
    dialog.showModal();
    return;

}

function copyText() {
    const text = document.getElementById("text2");
    if (text.value.trim() === "") {
        var tooltip = document.getElementById("tooltip");
        tooltip.innerHTML = "Empty message";
    }
    else {
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        var tooltip = document.getElementById("tooltip");
        tooltip.innerHTML = "Copied! ";
    }
}

function outCopyText() {
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "Copy to clipboard";
}





