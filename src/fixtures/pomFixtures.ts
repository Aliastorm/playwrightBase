import { test as base } from '@playwright/test';
import { SamplePage } from '@pom/SamplePage';

type MyFixtures = {
    samplePage: SamplePage;
    samplePage2: SamplePage;
};

export const test = base.extend<MyFixtures>({
    samplePage: async ({ page }, use) => use(new SamplePage(page)),

    samplePage2: async ({ page }, use) => await use(new SamplePage(page)),
});

export { expect } from '@playwright/test';
