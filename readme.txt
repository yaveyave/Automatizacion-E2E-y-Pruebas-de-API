# README

### Ejercicio 1 - Automatización E2E con Cypress (Demoblaze)

Este proyecto automatiza el flujo de compra en la página https://demoblaze.com/ utilizando Cypress.

REQUISITOS PREVIOS
- Node.js (v16 o superior)
- npm o yarn
- Cypress instalado de forma global o en el proyecto

INSTALACIÓN
1. Clona este repositorio:
   git clone https://github.com/yaveyave/Automatizacion-E2E-y-Pruebas-de-API.git
   cd Automatizacion-E2E-y-Pruebas-de-API

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
   /mochawesome-report/mochawesome_001.html

Nota: Si deseas limpiar reportes anteriores antes de generar uno nuevo:
   rm -rf mochawesome-report/

ESCENARIO AUTOMATIZADO
- Abrir la página principal de Demoblaze.
- Seleccionar dos productos y agregarlos al carrito.
- Validar que se muestren alertas de confirmación.
- Ir al carrito y confirmar que haya al menos dos productos.
- Llenar el formulario de compra con datos de prueba.
- Confirmar la compra y validar el mensaje de confirmación.

Los tests se encuentran en:
   cypress/e2e/e2e_demoblaze.cy.js

---

### Ejercicio 2 - Pruebas de API con Cypress (Swagger Petstore)

Este ejercicio automatiza pruebas sobre la API pública Swagger Petstore (https://petstore.swagger.io/) validando diferentes endpoints.

ENDPOINTS PROBADOS
1. POST /pet - Crear una mascota en la tienda.
2. GET /pet/{id} - Consultar una mascota por ID.
3. PUT /pet - Actualizar el nombre y estado de la mascota.
4. GET /pet/findByStatus - Validar que la mascota se encuentra en la lista de estado sold.

EJECUCIÓN
Ejecuta el siguiente comando:
   npx cypress run --spec "cypress/e2e/api_petstore.cy.js" --reporter mochawesome

El reporte se generará en:
   /mochawesome-report/mochawesome_002.html

COMPORTAMIENTO DE LA API
- La API de Petstore es inestable y en ocasiones no persiste los datos creados con el POST.
- Algunos GET pueden devolver 404 aunque el POST haya devuelto 200.
- Las pruebas están diseñadas para evidenciar estos problemas.
- Los reportes muestran claramente qué endpoints pasaron y cuáles fallaron, lo que permite identificar la inestabilidad del entorno.

Los tests se encuentran en:
   cypress/e2e/api_petstore.cy.js
