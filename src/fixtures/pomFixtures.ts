import { test as base } from '@playwright/test';
import { SamplePage } from '@pom/SamplePage';

type MyFixtures = {
    samplePage: SamplePage;
};

export const test = base.extend<MyFixtures>({
    samplePage: async ({ page }, use) => use(new SamplePage(page)),
});

export { expect } from '@playwright/test';
