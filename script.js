document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para los checkboxes
    const checkboxes = document.querySelectorAll('.checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            this.classList.toggle('checked');
            if (this.classList.contains('checked')) {
                this.style.backgroundColor = '#8A2BE2'; // Color morado
                // Añadir logo de Drive
                if (!this.querySelector('.drive-logo')) {
                    const driveLogo = document.createElement('div');
                    driveLogo.className = 'drive-logo';
                    
                    // Crear imagen SVG del logo de Drive
                    const svgLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svgLogo.setAttribute('width', '16');
                    svgLogo.setAttribute('height', '16');
                    svgLogo.setAttribute('viewBox', '0 0 87.3 78');
                    
                    // Crear los tres triángulos del logo de Drive
                    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path1.setAttribute('d', 'M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z');
                    path1.setAttribute('fill', '#ffffff');
                    
                    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path2.setAttribute('d', 'M43.65 25l-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-27.5 47.6c-.8 1.4-1.2 2.95-1.2 4.5h27.5z');
                    path2.setAttribute('fill', '#ffffff');
                    
                    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path3.setAttribute('d', 'M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.5l5.5 9.5z');
                    path3.setAttribute('fill', '#ffffff');
                    
                    // Añadir los paths al SVG
                    svgLogo.appendChild(path1);
                    svgLogo.appendChild(path2);
                    svgLogo.appendChild(path3);
                    
                    // Añadir el SVG al contenedor
                    driveLogo.appendChild(svgLogo);
                    
                    driveLogo.style.position = 'absolute';
                    driveLogo.style.top = '50%';
                    driveLogo.style.left = '50%';
                    driveLogo.style.transform = 'translate(-50%, -50%)';
                    
                    this.appendChild(driveLogo);
                }
            } else {
                this.style.backgroundColor = 'transparent';
                // Eliminar flecha blanca
                const arrow = this.querySelector('.check-arrow');
                if (arrow) {
                    this.removeChild(arrow);
                }
            }
        });
    });

    // Funcionalidad para los radio buttons
    const radios = document.querySelectorAll('.radio');
    
    radios.forEach(radio => {
        radio.addEventListener('click', function() {
            // Desmarcar todos los radios
            radios.forEach(r => {
                r.classList.remove('selected');
            });
            
            // Marcar el radio actual
            this.classList.add('selected');
        });
    });

    // Funcionalidad para el slider
    const slider = document.querySelector('input[type="range"]');
    const sliderValue = document.querySelector('.slider span');
    
    slider.addEventListener('input', function() {
        sliderValue.textContent = `Fov ${this.value}`;
    });

    // Funcionalidad para el dropdown
    const dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('change', function() {
        console.log('Opción seleccionada:', this.value);
    });

    // Funcionalidad para el botón de inyectar
    const injectButton = document.querySelector('.button');
    
    injectButton.addEventListener('click', function() {
        alert('Esta es una versión legal sin funcionalidades de hack. Solo es una demostración de interfaz.');
    });
    
    // Funcionalidad para las pestañas
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Desactivar todas las pestañas
            tabs.forEach(t => {
                t.classList.remove('active');
                t.style.backgroundColor = '#8A2BE2'; // Restaurar color morado
                t.style.color = 'white';
            });
            
            // Activar la pestaña actual
            tab.classList.add('active');
            tab.style.backgroundColor = 'white'; // Cambiar a blanco cuando está activo
            tab.style.color = '#333';
            
            // Ocultar todos los contenidos
            contents.forEach(c => c.style.display = 'none');
            
            // Mostrar el contenido actual
            contents[index].style.display = 'block';
        });
    });
    
    // Inicializar la primera pestaña como activa
    if (tabs.length > 0) {
        tabs[0].click();
    }
});