import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/loginPage';

let loginPage;

test.beforeEach(({ page })=>{
    loginPage = new LoginPage(page);
})

test.describe('Teste de login - SauceDemo', () => {
    test('login com credenciais válidas', async ({}) => {
        await loginPage.goLogin();
    });
});