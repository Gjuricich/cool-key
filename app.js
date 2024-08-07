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

function replacement(text, include, replacement) {
    for (let i = 0; i < include.length; i++) {
        if (text.includes(include[i])) {
            text = text.replaceAll(include[i], replacement[i]);
        }
    }
    return text;
}




