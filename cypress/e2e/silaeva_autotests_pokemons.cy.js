describe('Автотесты. Покемоны', function () {
    it('Покупка нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('ilana.qa@proton.me');
        cy.get('#password').type('Ii12345$');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5645656456564565');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Vasiliy Pupkin');
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').should('be.visible');
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible');
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
    })

})