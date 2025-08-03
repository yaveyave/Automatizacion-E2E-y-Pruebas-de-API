describe('Pruebas de API - Swagger Petstore', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';
  let petId;

  it('Crear una mascota (POST /pet)', () => {
    cy.request('POST', `${baseUrl}/pet`, {
      id: Date.now(),
      name: 'Firulais',
      status: 'available'
    }).then((response) => {
      expect(response.status).to.eq(200);
      petId = response.body.id;
      cy.log(`Mascota creada con ID: ${petId}`);
    });
  });

  it('Consultar mascota por ID (GET /pet/{id})', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/${petId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200, `La API devolvió ${response.status}`);
      expect(response.body.name).to.eq('Firulais');
    });
  });

  it('Actualizar mascota (PUT /pet)', () => {
    cy.request('PUT', `${baseUrl}/pet`, {
      id: petId,
      name: 'Max',
      status: 'sold'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('sold');
    });
  });

  it('Validar que la mascota está en la lista de sold (GET /pet/findByStatus)', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/findByStatus?status=sold`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      const petFound = response.body.some((pet) => pet.id === petId);
      expect(petFound).to.be.true;
    });
  });
});
