// Función para manejar el efecto en la redirección a index
function redirectEffect(event) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = event.target.href;
        }, 500); 
 }




