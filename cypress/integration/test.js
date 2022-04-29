describe('ini tes pertamaku', function(){
    it('lpositif case ',function(){
        cy.visit('https://example.cypress.io');

        cy.contains('type').click()

        cy.url().should('include','commands/actions')

        cy.get('.action-email')
            .type('dika@gmail.com')
            .should('have.value','dika@gmail.com') //jawaban seharusnya yang diinginkan
        
        

        cy.get('.action-focus')
            .type('dika1234')
            .should('have.value', 'dika1234') 
        
        cy.get('.action-blur')
            .type('andika aji saputra')
            .should('have.value', 'andika aji saputra') 

        cy.get('.action-clear')
            .type('ini deskripsi')
            .should('have.value', 'ini deskripsi') 
        
        cy.get('#couponCode1')
            .type('ASJ1234')
            .should('have.value', 'ASJ1234')
        
        cy.get('<button type="submit" class="btn btn-primary">Submit</button>') //dapetin button dengan cara copy element nya
        cy.focused().click() //fokus kalo kondisi button di form nya ada 1 boleh pakai focused 
        cy.contains('Submit').click() //element untuk hit button nya

        //cara 2 untuk nyari button
        // cy.get('.action-form')
        //     .find('[type="text"]').type('HALFOFF')
        // cy.get('.action-form').submit()
        //     .next().should('contain', 'Your form has been submitted!')

        //klik toggle button
        cy.get('<button type="button" class="btn btn-lg btn-danger action-btn" data-toggle="popover" title="" data-placement="top" data-content="This popover shows up on click" data-original-title="Popover">Click to toggle popover</button>')

        cy.contains('Click to toggle popover').click()

        //dbclick
        cy.get('.action-div').dblclick().should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')

        //event trigger
        cy.get('.trigger-input-range')
        .invoke('val', 66)
        .trigger('change')
        .get('input[type=range]').siblings('p')
        .should('have.text', '66')
            });
});

