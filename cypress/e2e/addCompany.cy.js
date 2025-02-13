describe('Добавление компании', () => {
  it('Негативный сценарий: успешное добавление компании, но показ страницы с кодом', () => {
    cy.login();
    cy.get('.nav-tabs > li:nth-child(3) > a:nth-child(1)').click();
    cy.get('.btn-warning').click();

    cy.get('input[name="name"]').type('Тест Название11');
    cy.get('span[class="select2-selection__rendered"]').click();
    cy.get('.select2-results__option').eq(1).click();
    cy.get('input[name="inn"]').type('1234567890');
    cy.get('input[name="ogrn"]').type('1234567890123');
    cy.get('input[name="kpp"]').type('123456789');
    cy.get('input[name="phone"]').type('12345678901');
    cy.get('input[name="adress"]').type('Тест Адрес');
    cy.get('.select2-search__field').click();
    cy.get('.select2-results__option').eq(1).click();
    cy.get('input[class="btn btn-submit"]').click();
  });

  it('Негативный сценарий: успешное добавление компании без ввода всех полей кроме названия и показ страницы с кодом', () => {
    cy.login();
    cy.get('.nav-tabs > li:nth-child(3) > a:nth-child(1)').click();
    cy.get('.btn-warning').click();

    cy.get('input[name="name"]').type('Тест Название22');
    cy.get('input[class="btn btn-submit"]').click();
  });
});