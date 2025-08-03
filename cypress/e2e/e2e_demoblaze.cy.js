describe('Test Demoblaze con Cypress', () => {
  before(() => {
    cy.viewport(1260, 680)
    cy.visit('https://demoblaze.com/')
  })

  it('Agregar productos al carrito y finalizar compra', () => {
    // ===== Primer producto =====
    cy.contains('Iphone 6 32gb').click()
    cy.contains('Add to cart').click()

    // Validar alerta de producto agregado
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added')
    })

    // Volver al home
    cy.get('#nava').click()

    // ===== Segundo producto =====
    cy.contains('Sony vaio i5').click()
    cy.contains('Add to cart').click()
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added')
    })

    // Ir al carrito
    cy.get('#cartur').click()

    // Validar que hay al menos 2 productos en el carrito
    cy.get('#tbodyid tr').should('have.length.at.least', 2)

    // Ir a comprar
    cy.get('.btn-success').click()

    // Llenar formulario
    cy.get('#name').type('Case Tester')
    cy.get('#country').type('Canada')
    cy.get('#city').type('Toronto')
    cy.get('#card').type('4242424242424242')
    cy.get('#month').type('06')
    cy.get('#year').type('2029')

    // Confirmar compra
    cy.get('#orderModal .btn-primary').click()

    // Validar mensaje de confirmación
    cy.get('.sweet-alert').should('be.visible')
    cy.get('.sweet-alert h2').should('contain', 'Thank you for your purchase!')

    // Cerrar modal
    cy.get('.confirm').click()
  })
})
