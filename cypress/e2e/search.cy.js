describe('Поиск', () => {
  it('Позитивный сценарий: успешный поиск', () => {
    cy.login();
    cy.get('input[name="q"]').type('Тест Имя');
    cy.get('button[class="btn btn-submit"]').click();
  });
});