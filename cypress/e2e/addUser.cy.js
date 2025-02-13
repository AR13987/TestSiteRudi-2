describe('Добавление задачи к пользователю', () => {
  it('Позитивный сценарий: успешное добавление задачи к пользователю', () => {
    cy.login();
    cy.get('.btn-danger').click();

    cy.get('input[name="noibiz_name"]').type('Тест Имя13173');
    cy.get('input[name="noibiz_email"]').type('email234443@email.ru');
    cy.get('input[name="noibiz_password"]').type('1313');
    cy.get('input[class="btn btn-danger"]').click();
  });
});