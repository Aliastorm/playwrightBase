import { Locator, Page } from '@playwright/test';

export class SamplePage {
    private readonly loginField: Locator;
    private readonly messageField: Locator;
    private readonly nameField: Locator;
    private readonly submitButton: Locator;
    readonly form: Locator;

    constructor(protected page: Page) {
        this.page = page;
        this.form = this.page.locator('#et_pb_contact_form_0');
        this.loginField = this.form.locator('input[name="login"]');
        this.nameField = this.form.locator('#et_pb_contact_name_0');
        this.messageField = this.form.locator('#et_pb_contact_message_0');
        this.submitButton = this.form.getByRole('button', { name: 'Submit' }).first(); // 2 buttons in page, select the first one
    }

    goto = async () => {
        await this.page.goto('.');
        await this.page.waitForLoadState('domcontentloaded');
        await this.messageField.isVisible();
    };

    fillName = async (login: string) => {
        await this.nameField.fill(login);
    };

    fillMessage = async (message: string) => {
        await this.messageField.fill(message);
    };

    clickSubmit = async () => {
        await this.submitButton.click();
    };
}
