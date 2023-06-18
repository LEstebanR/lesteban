describe('Home', () => {
  it('should render Home', () => {
    cy.visit('/')
    cy.get('h2').should('contain', 'Luis Esteban Ramírez')
  })
})
