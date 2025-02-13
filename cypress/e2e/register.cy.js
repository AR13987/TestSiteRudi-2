describe('Регистрация пользователя', () => {
  it('Позитивный сценарий: успешная регистрация', () => {
    cy.visit('http://users.bugred.ru/user/login/index.html');
    cy.get('input[name="name"]').type('Тест Имя');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[type="password"]').eq(1).type('ВашПароль');
    cy.get('input[name="act_register_now"]').click();
  });
});