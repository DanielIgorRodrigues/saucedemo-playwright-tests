import { test, expect } from '@playwright/test'

export class LoginPage{
    constructor (page) {
        this.page = page;
    };

    async goLogin() {
        await this.page.goto('/')
        await expect(this.page).toHaveTitle('Swag Labs')
    };
};