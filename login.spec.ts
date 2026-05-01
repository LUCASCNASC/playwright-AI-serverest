import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login UI - ServeRest', () => {
  test('deve realizar login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/login');
    await loginPage.login('fulano@qa.com', 'teste');
    
    // Aguardar uma confirmação visual da próxima tela
  });
});