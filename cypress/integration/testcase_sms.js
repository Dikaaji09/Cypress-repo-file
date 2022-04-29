//buat perubahan
describe("testcase SMS Gredu", function(){
    it("LOGIN (positif case)", function(){
        cy.visit('https://sms.sowat.dev/login')
        //mulai untuk code nya dibawah
        cy.get(':nth-child(2) > .form-control-line')
            .type('adminkece@yopmail.com')
            .should('have.value','adminkece@yopmail.com' )

        cy.get(':nth-child(3) > .form-control-line')
            .type('WurP1290').focus()
            .should('have.value','WurP1290').focus()
        
        cy.get('.ant-btn')
       
        cy.get('button').click()          
        //masuk ke dashboard
        cy.get('.title').contains('Pengguna').click()
        cy.get('.accordion-collapse').contains('Semua').click().wait(1000)
        cy.get('.pagination-component').should('have.length', 1)
        .click()

        //event logout
        cy.get('#profile-dropdown').click()
        cy.get('.dropdown-menu').contains('Logout').click()

        //selesai
    });
    it("LOGIN email dengan _ (negatif case)",function(){
        cy.visit('https://sms.sowat.dev/login')
        //mulai untuk code nya dibawah
        cy.get(':nth-child(2) > .form-control-line')
            .type('adminkece_@yopmail.com')
            .should('have.value','adminkece_@yopmail.com' )

        cy.get(':nth-child(3) > .form-control-line')
            .type('WurP1290').focus()
            .should('have.value','WurP1290').focus()
        
        cy.get('<button type="submit" class="ant-btn btn btn-gredu-orange btn-block mt-4 ant-btn-submit"><span>Masuk</span></button>')
       
        cy.get('button').click()
        cy.contains("Email dan kata sandi tidak sesuai, mohon ulangi.").should('exist')
        cy.clearCookies()
            
    });
    it("LOGIN email dengan m double (negatif case)",function(){
        cy.visit('https://sms.sowat.dev/login')
        //mulai untuk code nya dibawah
        cy.get(':nth-child(2) > .form-control-line')
            .type('adminkece@yopmail.comm')
            .should('have.value','adminkece@yopmail.comm' )

        cy.get(':nth-child(3) > .form-control-line')
            .type('WurP1290').focus()
            .should('have.value','WurP1290').focus()
        
        cy.get('<button type="submit" class="ant-btn btn btn-gredu-orange btn-block mt-4 ant-btn-submit"><span>Masuk</span></button>')
       
        cy.get('button').click()
        cy.contains("Email dan kata sandi tidak sesuai, mohon ulangi.").should('exist')
        cy.clearCookies()
            
    });
    it("LOGIN email dengan @ double (negatif case)",function(){
        cy.visit('https://sms.sowat.dev/login')
        //mulai untuk code nya dibawah
        cy.get(':nth-child(2) > .form-control-line')
            .type('adminkece@@yopmail.com')
            .should('have.value','adminkece@@yopmail.com' )

        cy.get(':nth-child(3) > .form-control-line')
            .type('WurP1290').focus()
            .should('have.value','WurP1290').focus()
        
        cy.get('<button type="submit" class="ant-btn btn btn-gredu-orange btn-block mt-4 ant-btn-submit"><span>Masuk</span></button>')
       
        cy.get('.ant-btn').click()
        cy.contains("Email dan kata sandi tidak sesuai, mohon ulangi.").should('exist')
        cy.clearCookies()
        //cy.screenshot() buat ss gambar
            
    });
});