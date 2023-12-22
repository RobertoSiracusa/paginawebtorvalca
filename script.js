
    document.addEventListener('DOMContentLoaded', function() {
        // Obtén los elementos <li> con la clase 'scroll'
        var items = document.querySelectorAll('.scroll');

        // Agrega un controlador de clic a cada elemento <li>
        items.forEach(function(item) {
            item.addEventListener('click', function() {
                // Obtiene el ID de la sección relacionada con el elemento <li>
                var sectionId = this.id.replace('section-nosotros', '');

                // Realiza el desplazamiento suave a la sección correspondiente
                document.getElementById(section-nosotros).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

