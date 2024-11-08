// Evento que se ejecuta cuando el contenido de la página ha sido completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-dark-mode');

    // Verifica si el modo oscuro está activado en localStorage y actualiza el tema en consecuencia
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="bi bi-sun"></i> Modo Claro';
    } else {
        toggleButton.innerHTML = '<i class="bi bi-moon"></i> Modo Oscuro';
    }
    
    // Escucha el clic en el botón para alternar entre modo oscuro y claro
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Guarda el estado del modo oscuro en localStorage y actualiza el icono del botón
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            toggleButton.innerHTML = '<i class="bi bi-sun"></i> Modo Claro';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            toggleButton.innerHTML = '<i class="bi bi-moon"></i> Modo Oscuro';
        }
    });
    // Función para mostrar un mensaje de bienvenida al usuario
    const alertMessage = () => {
        alert('¡Bienvenido a nuestra página de cuidado de perros!');
    };

    alertMessage();
});

// Referencia al botón de "Volver al inicio"
const backToTopButton = document.getElementById('back-to-top');

// Muestra u oculta el botón "Volver al inicio" dependiendo de la posición de desplazamiento de la página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Evento para hacer scroll hacia la parte superior de la página cuando se hace clic en el botón
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Evento para manejar el envío del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío por defecto

        // Obtiene los valores de los campos del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Verifica si los campos están completos
        if (!name || !email || !message) {
            // Muestra mensaje de error si faltan campos
            document.getElementById('alertMessage').textContent = 'Por favor, completa todos los campos.';
            const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
            alertModal.show();
        } else {
            // Configura el contenido del modal de confirmación
            document.getElementById('alertMessage').textContent = '¡Mensaje enviado correctamente!';

            // Activa el modal de confirmación
            const successModal = new bootstrap.Modal(document.getElementById('alertModal'));
            successModal.show();

            // Construye el mailto y redirige después de mostrar la alerta de éxito
            const mailtoLink = `mailto:dalbieryvet@gmail.com?subject=Mensaje de ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0ACorreo: ${encodeURIComponent(email)}`;
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 1000);

            // Limpia el formulario
            contactForm.reset();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const privacyItems = document.querySelectorAll('.privacy-item');

    // Efecto de hover para cambiar texto temporalmente
    privacyItems.forEach(item => {
        const originalText = item.querySelector('p').textContent;
        // Cambia el texto cuando el cursor está sobre el elemento
        item.addEventListener('mouseenter', () => {
            item.querySelector('p').textContent = "Haz clic para más detalles.";
        });
        // Restaura el texto original cuando el cursor sale del elemento
        item.addEventListener('mouseleave', () => {
            item.querySelector('p').textContent = originalText;
        });
    });
});

// Evento para mostrar u ocultar detalles de privacidad cuando se hace clic en el elemento
document.addEventListener('DOMContentLoaded', () => {
    const privacyItems = document.querySelectorAll('.privacy-item');

    privacyItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');  // Agrega la clase "active" al elemento seleccionado
            const details = item.querySelector('.privacy-details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// Muestra la descripción de artículos al pasar el mouse
document.querySelectorAll('.article-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.article-description').style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('.article-description').style.display = 'none';
    });
});
// Función para mostrar el artículo completo cuando se selecciona un tema específico
function showArticle(id) {
    const titles = {
        1: "Cuidados Básicos para Cachorros",
        2: "Cómo Alimentar a tu Perro",
        3: "Ejercicio Adecuado para Perros"
    };
    const contents = {
        1: "Los cachorros requieren cuidados especiales en su primer año de vida. Es importante programar visitas veterinarias para llevar un control de sus vacunas, desparasitaciones y chequeos generales. Además, necesitan una alimentación balanceada que les provea nutrientes esenciales, así como socialización para desarrollar buenos hábitos. Asegúrate de brindarles un espacio seguro y dedicarles tiempo para que se sientan protegidos y amados, lo cual es fundamental para su desarrollo emocional.",
        2: "La alimentación adecuada es uno de los factores más importantes para la salud de tu perro. Debes evitar ciertos alimentos como chocolate, cebolla, uvas y alimentos procesados, ya que pueden causarles daño. Elige comida especialmente formulada para perros de acuerdo a su tamaño, edad y nivel de actividad. También es recomendable consultar con el veterinario para conocer la cantidad adecuada que necesita y asegurarte de que tenga siempre agua fresca a su disposición.",
        3: "El ejercicio es vital para el bienestar físico y mental de los perros. La cantidad de ejercicio depende de la raza, la edad y el nivel de energía de cada perro. Perros de raza pequeña pueden requerir menos actividad física, mientras que razas grandes y activas como el pastor alemán o el labrador pueden necesitar al menos una hora de ejercicio diario. Las actividades pueden incluir paseos, juegos de buscar objetos, o incluso ejercicios de entrenamiento en casa. Esto no solo ayuda a mantenerlos en forma, sino que también previene el aburrimiento y problemas de conducta."
    };
    const images = {
        1: "/img/cuidado.webp",
        2: "/img/comida.jpg",
        3: "/img/ejercicio.jpg"
    };
    // Actualiza el título, contenido e imagen del artículo seleccionado
    document.getElementById('full-article-title').textContent = titles[id];
    document.getElementById('full-article-content').textContent = contents[id];
    document.getElementById('full-article-image').src = images[id];
    document.getElementById('full-article').style.display = 'block'; // Muestra el artículo completo
}
// Oculta el artículo completo cuando se cierra
function hideArticle() {
    document.getElementById('full-article').style.display = 'none';
}
