describe('Добавление задачи к пользователю', () => {
  it('Позитивный сценарий: успешное добавление задачи к пользователю', () => {
    cy.login();
    cy.get('.nav-tabs > li:nth-child(2) > a:nth-child(1)').click();
    cy.get('.btn-warning').click();

    cy.get('input[name="name"]').type('Тест Название11');
    cy.get('textarea[name="description"]').type('Тест описание');
    cy.get('span[class="select2-selection__rendered"]').click();
    cy.get('.select2-results__option').eq(1).click();
    cy.get('input[class="btn btn-submit"]').click();
  });
});