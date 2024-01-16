describe('Автотесты на форму логина', function () {
   it('Позитивный кейс авторизации. Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type(email);
        cy.get('#pass').type(password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })

   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').should('be.visible');
        cy.get('#mailForgot').type(email);
        cy.get('#restoreEmailButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
    })

   it('Негативный кейс авторизации. Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type(mail);
        cy.get('#pass').type(wrong_password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })

   it('Негативный кейс авторизации. Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type(wrong_email);
        cy.get('#pass').type(password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })

   it('Негативный кейс авторизации. Логин без @, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type(wrong_email_without_@);
        cy.get('#pass').type(password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })

   it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type(email_different_case);
        cy.get('#pass').type(password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})