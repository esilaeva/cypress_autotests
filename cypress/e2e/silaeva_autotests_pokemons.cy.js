describe('Автотесты. Покемоны', function () {
    it('Покупка нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type(login);
        cy.get('#password').type(password);
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(card_number);
        cy.get(':nth-child(1) > .pay_base-input-v2').type(date);
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type(cvv);
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type(name_card_holder);
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').should('be.visible');
        cy.get('#cardnumber').type(code);
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible');
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
    })

})

