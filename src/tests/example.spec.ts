import { expect, test } from '@fixtures/pomFixtures';

test.beforeAll(async () => {
    console.info("I'm a beforeAll hook, I run once before all tests");
});

test.afterAll(async () => {
    console.info("I'm an afterAll hook, I run once after all tests");
});

test.beforeEach(async ({ samplePage }) => {
    console.info("I'm a beforeEach hook, I run before each test");
    await samplePage.goto();
});

test('I can fill a form and submit', async ({ samplePage }) => {
    const name = 'sample name';
    const message = 'I am a sample message';
    const successMessage = 'Thanks for contacting us';

    await test.step('Fill the form and submit', async () => {
        await samplePage.fillName(name);
        await samplePage.fillMessage(message);

        await samplePage.clickSubmit();
    });

    await test.step('Check the form was submitted', async () => {
        await expect(
            samplePage.form,
            "I'm in error and I inform user I didn't see expected text",
        ).toHaveText(successMessage);
    });
});
