
describe('Покупка нового фото для своего тренера', function () {

it('Покупка нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/'); // посетили сайт
        cy.get(':nth-child(1) > .auth__input').type('evgeniy.lobach@gmail.com'); // ввели логин
        cy.get('#password').type('Sxv20-0490645'); // ввели пароль
        cy.get('.auth__button').should('be.enabled'); // кнопка Войти активна
        cy.get('.auth__button').click(); // нажали Войти
        cy.get('.header__btns > [href="/shop"]').click(); // нажали Магазин
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // нажали Купить на аве тренера 
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // ввели номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0330'); // ввели срок годности карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввели cvv карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Caesar'); // ввели имя покупателя
        cy.get('.pay-btn').should('be.enabled'); // Оплатить активна
        cy.get('.pay-btn').click(); // нажали кнопку Оплатить
        cy.get('#cardnumber').type('56456'); // ввели смс код
        cy.get('.payment__submit-button').click(); // нажали кнопку Отправить
        cy.get('.payment__font-for-success').should('be.visible'); // проверка что текст виден
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверка содержания текста
        cy.get('.payment__adv').click(); // нажали кнопку Вернуться в магазин
    })
})
