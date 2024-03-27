import { Locator, Page } from '@playwright/test';

export class SamplePage {
    private loginField: Locator;

    constructor(protected page: Page) {
        this.page = page;
        this.loginField = this.page.locator('input[name="login"]');
    }

    fillLoginField = async (login: string) => {
        await this.loginField.fill(login);
    };

    myMethod = async () => {
        await this.fillLoginField('test');
    };
}
