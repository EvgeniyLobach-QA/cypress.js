
describe('Автотесты на форму логина', function () {
  
   it('1. Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти активна
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка содержания текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика
    })

   it('2. Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#forgotEmailButton').should('be.enabled'); // кнопка Забыли пароль? активна
        cy.get('#forgotEmailButton').click(); // нажали Забыли пароль?
        cy.get('#mailForgot').type('asf.lkj@kjsd.ru'); // ввели E-mail
        cy.get('#restoreEmailButton').should('be.enabled'); // кнопка Отправить код активна
        cy.get('#restoreEmailButton').click(); // нажали Отправить код
        cy.get('#messageHeader').should('be.visible'); // проверка что текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка содержания текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика
    })

   it('3. Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#pass').type('iLoveqastudio15'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти активна
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка содержания текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика
    })

   it('4. НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#mail').type('negerman@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти активна
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка содержания текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика
    })

   it('5. Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#mail').type('blabla132&.kz'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти активна
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка содержания текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика
    })

   it('6. Верный логин с символами верхнего регистра и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти не активна
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти активна
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').should('be.visible'); // проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка содержания текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка видимости крестика
    })

})
