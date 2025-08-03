Ejercicio 1 - Automatización E2E con Cypress (Demoblaze)

Este proyecto automatiza el flujo de compra en la página https://demoblaze.com/ utilizando Cypress.

REQUISITOS PREVIOS
- Node.js (v16 o superior)
- npm o yarn
- Cypress instalado de forma global o en el proyecto

INSTALACIÓN
1. Clona este repositorio:
   git clone <URL_REPOSITORIO>
   cd <carpeta_proyecto>

2. Instala las dependencias:
   npm install

3. Ejecuta los tests en modo interactivo:
   npx cypress open

4. Ejecuta los tests en modo headless (sin interfaz):
   npx cypress run

REPORTES
Este proyecto usa Mochawesome para generar reportes.  
Para generar un reporte HTML:
   npx cypress run --reporter mochawesome

El reporte estará disponible en:
   /mochawesome-report/report.html

ESCENARIO AUTOMATIZADO
- Abrir la página principal de Demoblaze.
- Seleccionar dos productos y agregarlos al carrito.
- Validar que se muestren alertas de confirmación.
- Ir al carrito y confirmar que haya al menos dos productos.
- Llenar el formulario de compra con datos de prueba.
- Confirmar la compra y validar el mensaje de confirmación.
