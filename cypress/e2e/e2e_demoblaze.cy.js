describe('Test Demoblaze con Cypress', () => {
  before(() => {
    // Cargar la página principal solo una vez antes de la prueba
    cy.visit('https://demoblaze.com/');
    cy.viewport(1260, 680);
  });

  it('Agregar productos al carrito y finalizar compra', () => {
    // Seleccionar iPhone 6 32gb
    cy.contains('Iphone 6 32gb').should('be.visible').click();
    cy.contains('Add to cart').should('be.visible').click();

    // Validar alerta de producto agregado
    cy.on('window:alert', (txt) => {
      expect(txt).to.include('Product added');
    });

    // Volver al home
    cy.get('#nava').should('be.visible').click();

    // Seleccionar Sony vaio i5
    cy.contains('Sony vaio i5').should('be.visible').click();
    cy.contains('Add to cart').should('be.visible').click();

    // Validar alerta de producto agregado
    cy.on('window:alert', (txt) => {
      expect(txt).to.include('Product added');
    });

    // Ir al carrito
    cy.get('#cartur').should('be.visible').click();

    // Validar que haya al menos 2 productos en el carrito
    cy.get('#tbodyid tr', { timeout: 6000 }).should('have.length.at.least', 2);

    // Finalizar compra
    cy.get('.btn-success').should('be.visible').click();

    // Llenar formulario de compra
    cy.get('#name').type('Case Tester');
    cy.get('#country').type('Canada');
    cy.get('#city').type('Toronto');
    cy.get('#card').type('4242424242424242');
    cy.get('#month').type('06');
    cy.get('#year').type('2029');

    // Confirmar compra
    cy.get('#orderModal .btn-primary').should('be.visible').click();

    // Validar mensaje de confirmación
    cy.get('.sweet-alert', { timeout: 6000 }).should('be.visible');
    cy.get('.sweet-alert h2').should('contain', 'Thank you for your purchase!');

    // Cerrar el modal final
    cy.get('.confirm').click();
  });
});
