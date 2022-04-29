// Caching session when logging in via page visit
it('coba session name',function(){
  cy.session('name', () => {
    cy.visit('https://sms.sowat.dev/login')
    cy.get(':nth-child(2) > .form-control-line').type('adminkece@yopmail.com')
    cy.get(':nth-child(3) > .form-control-line').type('WurP1290')
    cy.get('.ant-btn').click()
  })
  
  // Caching session when logging in via API
  cy.session([email, password], () => {
    cy.request({
      method: 'POST',
      url: 'https://sms.sowat.dev/login',
      body: { email, password },
    }).then(({ body }) => {
      window.localStorage.setItem('authToken', body.token)
    })
  })
  
});