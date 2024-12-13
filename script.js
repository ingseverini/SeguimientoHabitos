// Función para mostrar la tarjeta emergente (primera tarjeta)
function mostrarTarjeta() {
    document.getElementById('secondary-screen').style.display = 'flex';
    document.getElementById('main-screen').style.opacity = '0.3'; // Pone la pantalla principal más transparente
}

// Función para cerrar la tarjeta emergente (primera tarjeta)
document.getElementById('secondary-screen').addEventListener('click', function(event) {
    if (event.target === this) { // Verifica si el clic fue fuera de la tarjeta
        this.style.display = 'none'; // Oculta la tarjeta
        document.getElementById('main-screen').style.opacity = '1'; // Restaura la opacidad de la pantalla principal
    }
});

// Asignar los eventos de clic a los botones para mostrar la tarjeta
document.getElementById('signup-btn').addEventListener('click', mostrarTarjeta);
document.getElementById('login-btn').addEventListener('click', mostrarTarjeta);
document.getElementById('join-btn').addEventListener('click', mostrarTarjeta);


// Seleccionar los botones de "Continuar con Google" y "Continuar con Facebook"
const googleBtn = document.querySelector('.google-btn');
const facebookBtn = document.querySelector('.facebook-btn');

// Seleccionar las tarjetas de Google y Facebook
const googleLoginCard = document.getElementById('google-login-card');
const facebookLoginCard = document.getElementById('facebook-login-card');

// Función para ocultar las tarjetas anteriores antes de mostrar la nueva
function hidePreviousCards() {
    const secondaryScreen = document.getElementById('secondary-screen');
    secondaryScreen.style.display = 'none'; // Oculta la tarjeta principal
    document.getElementById('main-screen').style.opacity = '1'; // Restaura la opacidad de la pantalla principal
}

// Mostrar la tarjeta de Google
googleBtn.addEventListener('click', () => {
    hidePreviousCards();  // Ocultar la tarjeta anterior (la de "Iniciar sesión")
    googleLoginCard.style.display = 'flex';  // Mostrar la tarjeta de Google
});

// Mostrar la tarjeta de Facebook
facebookBtn.addEventListener('click', () => {
    hidePreviousCards();  // Ocultar la tarjeta anterior (la de "Iniciar sesión")
    facebookLoginCard.style.display = 'flex';  // Mostrar la tarjeta de Facebook
});

// Ocultar la tarjeta de Google cuando se haga clic fuera de ella
googleLoginCard.addEventListener('click', (event) => {
    if (event.target === googleLoginCard) {
        googleLoginCard.style.display = 'none';  // Ocultar tarjeta de Google
        document.getElementById('main-screen').style.opacity = '1'; // Restaurar opacidad al cerrar
    }
});

// Ocultar la tarjeta de Facebook cuando se haga clic fuera de ella
facebookLoginCard.addEventListener('click', (event) => {
    if (event.target === facebookLoginCard) {
        facebookLoginCard.style.display = 'none';  // Ocultar tarjeta de Facebook
        document.getElementById('main-screen').style.opacity = '1'; // Restaurar opacidad al cerrar
    }
});



// Obtener elementos
const googleNextBtn = document.getElementById('next-btn');
const facebookNextBtn = document.getElementById('fb-next-btn');
const googleCard = document.getElementById('google-login-card');
const facebookCard = document.getElementById('facebook-login-card');
const functionalityScreen = document.getElementById('functionality-screen');

// Manejar clic en "Siguiente" de Google
googleNextBtn.addEventListener('click', () => {
    googleCard.style.display = 'none';
    functionalityScreen.style.display = 'block';
});

// Manejar clic en "Iniciar Sesión" de Facebook
facebookNextBtn.addEventListener('click', () => {
    facebookCard.style.display = 'none';
    functionalityScreen.style.display = 'block';
});



// Función para abrir la pantalla de Rastreador de Hábitos
function openHabitTracker() {
    document.getElementById('habit-tracker-screen').classList.add('show');
}

// Otras funciones para abrir/revisar otras pantallas (opcional)
function openHabitCreation() {
    // Aquí debes agregar la lógica para abrir la pantalla de Creación de Hábitos
}
