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

// Función que recibe el texto a analizar, los valores que debe incluir dicho texto y los
// reemplazos correspondientes a los valores que se encuentren.
function replacement(text, include, replacement) {
    for (let i = 0; i < include.length; i++) {
        if (text.includes(include[i])) {
            text = text.replaceAll(include[i], replacement[i]);
        }
    }
    return text;
}

//Limpia los text área.
function clearTextArea() {
    document.querySelector('#text1').value = '';
    document.querySelector('#text2').value = '';
}

//Crea y asigna el texto en el listado del modal.
function addListDialogText(text) {
    const li = document.createElement('li');
    li.textContent = text;
    document.getElementById('dialog-text-list').appendChild(li);
}

// Función que valida mayúsculas y caracteres especiales en el texto.
function validateText() {
    const text = document.getElementById('text1').value;
    const validateUppercase = /[A-Z]/;
    const validateSpecialCharacters = /[^a-z\s]/;
    const dialog = document.getElementById('dialog');
    const textList = document.getElementById('dialog-text-list');
    const title = document.getElementById('dialog-title');


    //Limpia mensajes anteriores
    textList.innerHTML = '';
    title.innerHTML = '';
    title.textContent = 'Error';

    if (validateUppercase.test(text)) {
        // Asigna el texto al modal
        addListDialogText('Uppercase letters are not allowed');
        clearTextArea();
        dialog.showModal();
        return false;
    }

    if (validateSpecialCharacters.test(text)) {
        // Asigna el texto al modal
        addListDialogText('Special characters are not allowed');
        clearTextArea();
        dialog.showModal();
        return false;
    }

    dialog.close();
    return true;
}

//Función que asigna el texto del modal de reglas
function rulesDialog() {
    const dialog = document.getElementById('dialog');
    const textList = document.getElementById('dialog-text-list');
    const title = document.getElementById('dialog-title');

    // Limpia mensajes anteriores
    textList.innerHTML = '';
    title.innerHTML = '';
    // Se asigna la estructura de texto que tendrá el modal.
    title.textContent = 'Rules';
    addListDialogText('Uppercase letters and special characters will not be accepted.');
    addListDialogText('The maximum character length allowed is 1000.');
    dialog.showModal();
    return;

}

//Función que maneja el ícono de copiar y actualiza el mensaje del tooltip.
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

//Luego de copiar el texto actualiza el mensaje del tooltip.
function outCopyText() {
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

//Función que maneja el modo oscuro/claro y modifica el display de los íconos
//según el modo seleccionado.
function encryptorMode() {
    const darkModeButton = document.getElementById('dark-mode');
    const lightModeButton = document.getElementById('light-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    document.body.classList.toggle('dark-mode');
    darkModeButton.style.display = isDarkMode ? 'inline' : 'none';
    lightModeButton.style.display = isDarkMode ? 'none' : 'inline';
}





