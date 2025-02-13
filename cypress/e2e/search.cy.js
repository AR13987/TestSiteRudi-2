describe('Регистрация пользователя', () => {
  it('Позитивный сценарий: успешная регистрация', () => {
    cy.login();
    cy.get('input[name="q"]').type('Тест Имя');
    cy.get('button[class="btn btn-submit"]').click();
  });
});